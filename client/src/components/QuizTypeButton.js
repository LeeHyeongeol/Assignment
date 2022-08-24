import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const QuizButtonLocation = styled.div`
  text-align: center;
`;
const StyledQuizButton = styled.button`
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
function QuizTypeButton(props) {
  let navigate = useNavigate();

  console.log("asdasdasdasd", props);
  return (
    <>
      <QuizButtonLocation>
        <StyledQuizButton onClick={() => navigate("/")}>
          뒤로가기
        </StyledQuizButton>
        <StyledQuizButton
          onClick={() =>
            props.type
              ? navigate(`/quiz/${props.type}`)
              : alert("직무를 선택해주세요")
          }
        >
          다음단계
        </StyledQuizButton>
      </QuizButtonLocation>
    </>
  );
}
export default QuizTypeButton;
