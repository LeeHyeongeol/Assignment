const { User } = require("../database/models");

const { decodeToken, setTokenCookie } = require("../lib/token");

//리프레시 토큰 해독 후 uuid로 db에서 유저정보 찾고 해당 유저정보 리턴 + 다시 리프레시토큰 만듬
const refresh = async (res, refreshToken) => {
  try {
    const decoded = await decodeToken(refreshToken);
    const user = await User.findByPk(decoded.userId);

    if (!user) {
      throw new Error("Invalid User error");
    }
    //refreshUserToken 메소드가 따로 있는건지?
    //user.prototype.refreshUserToken 이기 때문에 user 인스턴스가 참조한 것임!
    //require로 불러올 필요도 없고 그저 user의 인스턴스이면 자동으로 사용할 수 있다!
    const tokens = await user.refreshUserToken(decoded.exp, refreshToken);
    setTokenCookie(res, tokens);

    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const consumeToken = async (req, res, next) => {
  //쿠키로부터 전달받은 accessToken, refreshToken이 잘 들어왔는지 확인한다.
  const { access_token: accessToken, refresh_token: refreshToken } =
    req.cookies;

  try {
    if (!accessToken) {
      throw new Error("No access token");
    }
    // accessToken을 해독한 후 해당 userId로 db에서 정보를 찾는다.
    const accessTokenData = await decodeToken(accessToken);
    const { id: userId } = accessTokenData.user;
    const user = await User.findByPk(userId);

    req.user = user;
    // console.log(req);

    // 만약 refreshToken의 만료기한이 30분 미만이라면 해독하고 새롭게 refreshToken을 만든다.
    // 다시 설명 요청
    // refresh token when exp < 30mins
    const diff = accessTokenData.exp * 1000 - new Date().getTime();
    if (diff < 1000 * 60 * 30 && refreshToken) {
      await refresh(res, refreshToken);
    }
  } catch (err) {
    if (!refreshToken) return next();
    try {
      // retry...
      const user = await refresh(res, refreshToken);
      req.user = user;
    } catch (e) {
      return next(e);
    }
  }

  return next();
};

module.exports = consumeToken;
