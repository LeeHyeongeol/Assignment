import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import QuizStartButton from "../components/QuizStartButton";

const FrontTitle = styled.h2`
  text-align: center;
  margin-top: 20%;
`;
const ButtonStyle = styled.div`
  display: flex;
  margin: 100px;
  justify-content: center;
`;

function BackendProblemType(props) {
  // const [language, setLanguage] = useState("");
  const [language, setLanguage] = useState("");
  const handleAxios = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    console.log(language);
    //비동기로 데이터 받아온 다음 페이지 라우팅
  };
  return (
    <>
      <FrontTitle>원하는 문제 종류를 선택하세요</FrontTitle>
      <br></br>
      <ButtonStyle>
        <Button onClick={(e) => handleAxios(e)} value="java">
          Java
        </Button>
        <Button onClick={(e) => handleAxios(e)} value="node">
          Node
        </Button>{" "}
        <Button onClick={(e) => handleAxios(e)} value="python">
          Python
        </Button>
      </ButtonStyle>
      <QuizStartButton type="backend" language={language} />
    </>
  );
}
export { BackendProblemType, ButtonStyle };
