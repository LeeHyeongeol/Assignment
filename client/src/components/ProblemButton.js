import styled from "styled-components";

const ButtonLocation = styled.div`
  text-align: center;
`;
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  & + & {
    margin-left: 1rem;
  }
`;

//건너뛰기 정답확인 버튼 만들기
function ProblemButton() {
  return (
    <>
      <ButtonLocation>
        <StyledButton>건너뛰기</StyledButton>
        <StyledButton>정답확인</StyledButton>
      </ButtonLocation>
    </>
  );
}
export default ProblemButton;
