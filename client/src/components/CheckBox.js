import { useState } from "react";
import styled, { css } from "styled-components";
import QuizType from "../pages/QuizType";

const QuizContainer = styled.div`
  text-align: center;
`;

const QuizFrame = styled.div`
  width: 100%;
  border: 3px solid black;
  height: 50px;
  padding: 30px;
  margin: 30px;
`;

const SCustomCheckboxWrapper = styled.div`
  position: relative;
  bottom: 10px;
  right: 10px;
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
  const onClickCheck = () => {
    setIschecked(!isChecked);
    console.log(!isChecked);
  };
  //type 상태 저장
  const handleClick = (value) => {
    props.handleTypeValue(value.text);
    console.log("Eeeeee", value.text);
  };

  return (
    <>
      {props.text ? (
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
      ) : (
        <QuizFrame>
          <SCustomCheckboxWrapper>
            <div>{props.content}</div>
            <SCustomCheckbox type="checkbox" isChecked={isChecked} />
            <SCustomLabel
              onClick={() => handleClick(props)}
              isChecked={isChecked}
            />
          </SCustomCheckboxWrapper>
        </QuizFrame>
      )}
    </>
  );
}

export default CheckBox;
