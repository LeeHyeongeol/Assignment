import styled from "styled-components";
import Button from "../components/Button";
import { useState } from "react";
import QuizStartButton from "../components/QuizStartButton";
import { ButtonStyle } from "./BackendProblemType";
const FrontTitle = styled.h2`
  text-align: center;
  margin-top: 20%;
`;

function FrontProblemType(props) {
  const [language, setLanguage] = useState("");
  const handleAxios = (e) => {
    setLanguage(e.target.value);
    console.log(e.target.value);
    //비동기로 데이터 받아온 다음 페이지 라우팅
  };
  return (
    <>
      <FrontTitle>원하는 문제 종류를 선택하세요</FrontTitle>
      <br></br>
      <ButtonStyle>
        <Button onClick={(e) => handleAxios(e)} value="react">
          React
        </Button>
        <Button onClick={(e) => handleAxios(e)} value="Angular">
          Angular
        </Button>{" "}
        <Button onClick={(e) => handleAxios(e)} value="vue">
          vue
        </Button>
      </ButtonStyle>
      <QuizStartButton type="frontend" language={language} />
    </>
  );
}
export default FrontProblemType;

// onClick={() => navigate(`/quiz/${props.type}/${randomNum}`)
