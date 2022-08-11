import { useState } from "react";
import styled, { css } from "styled-components";

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

function CheckBox() {
  const [isChecked, setIschecked] = useState(false);
  const onClickCheck = () => {
    setIschecked(!isChecked);
    console.log(!isChecked);
  };

  return (
    <SCustomCheckboxWrapper>
      <SCustomCheckbox type="checkbox" isChecked={isChecked} />
      <SCustomLabel onClick={onClickCheck} isChecked={isChecked} />
    </SCustomCheckboxWrapper>
  );
}

export default CheckBox;
