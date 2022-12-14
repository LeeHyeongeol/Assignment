import { useState } from "react";
import styled, { css } from "styled-components";
import QuizType from "../pages/QuizType";
import ProblemButton from "./ProblemButton";

const QuizContainer = styled.div`
  text-align: center;
  // justify-content: center;
`;

const QuizFrame = styled.div`
  // display: flex;
  justify-content: center;
  // width: 50%;
  border: 3px solid black;
  height: 50px;
  padding: 30px;
  margin: 30px;
  // margin-left: 20%;
`;

const SCustomCheckboxWrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
`;

const SCustomCheckbox = styled.input`
  visibility: hidden;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

const SCustomLabel = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }
        `
      : css`
          background-color: #fff !important;
          &:after {
            opacity: 1;
          }
        `}
`;

function CheckBox(props) {
  console.log("props@@@@", props);
  //   console.log("@#!#!", props.prob[0].content[0]);
  const [isChecked, setIschecked] = useState(false);
  // const onClickCheck = (value) => {
  //   setIschecked(!isChecked);
  //   console.log(!isChecked);
  //   props.handleTypeValue(value.text);
  //   console.log("Eeeeee", value.text);
  // };
  //type ?????? ??????

  const handleClick = (value) => {
    setIschecked(!isChecked);
    props.handleTypeValue(value.text);
    console.log("Eeeeee", value.text);
  };

  console.log(props.handleTypeValue);

  // if (!props.handleTypeValue === undefined) {
  //   handleClick = (value) => {
  //     setIschecked(!isChecked);
  //     props.handleTypeValue(value.text);
  //     console.log("Eeeeee", value.text);
  //   };
  // } else {
  //   handleClick = (value) => {
  //     setIschecked(!isChecked);
  //     props.handleTypeValue2(value.text);
  //     console.log("Eeeeee", value.text);
  //   };
  // }

  return (
    <>
      <QuizFrame>
        <SCustomCheckboxWrapper>
          <div>{props.text}</div>
          <SCustomCheckbox type="checkbox" isChecked={isChecked} />
          <SCustomLabel
            onClick={() => handleClick(props)}
            isChecked={isChecked}
          />
        </SCustomCheckboxWrapper>
      </QuizFrame>
    </>
  );
}

export default CheckBox;
