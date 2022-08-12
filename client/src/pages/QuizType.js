import CheckBox from "../components/CheckBox";
import styled from "styled-components";
import QuizTypeButton from "../components/QuizTypeButton";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const TypeTitleLocation = styled.h2`
  text-align: center;
  margin-top: 20%;
`;
const QuizTypeStyle = styled.div`
  margin: 100px;
`;
function QuizType(props) {
  //   console.log("현재id보자보자", window.location.href);
  console.log("QuizType", props.text);
  //상태 끌어올리기 위한 함수 props.text를 받아와야 함
  const [typeValue, setTypeValue] = useState("");
  const handleTypeValue = (value) => {
    setTypeValue(value);
  };
  console.log("선택한타입", typeValue);
  return (
    <>
      <TypeTitleLocation>본인의 직무를 선택하십시오</TypeTitleLocation>
      <QuizTypeStyle>
        <CheckBox text={props.text[0]} handleTypeValue={handleTypeValue} />
        <CheckBox text={props.text[1]} handleTypeValue={handleTypeValue} />
        <CheckBox text={props.text[2]} handleTypeValue={handleTypeValue} />
      </QuizTypeStyle>
      <QuizTypeButton type={typeValue} />
      <Outlet></Outlet>
    </>
  );
}

export default QuizType;
