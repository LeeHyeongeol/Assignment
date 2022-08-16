import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
function ProblemButton(props) {
  console.log("문제정보", props);
  //정답유무 확인하는 함수 만들기
  let handleNextProblem;
  if (props.select === props.answer) {
    handleNextProblem = function () {
      alert("정답입니다!");
    };
  } else {
    handleNextProblem = function () {
      alert("오답입니다!");
    };
  }

  let navigate = useNavigate();
  return (
    <>
      <ButtonLocation>
        <StyledButton
          onClick={() =>
            navigate(
              `/quiz/${props.urlInfo[0]}/${props.urlInfo[1]}/${props.urlInfo[2]}`
            )
          }
        >
          건너뛰기
        </StyledButton>
        <StyledButton onClick={() => handleNextProblem()}>
          정답확인
        </StyledButton>
      </ButtonLocation>
    </>
  );
}
export default ProblemButton;
