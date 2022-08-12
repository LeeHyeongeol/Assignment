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
  let randomNum = parseInt(Math.random() * 5);

  console.log("asdasdasdasd", props);
  return (
    <>
      <QuizButtonLocation>
        <StyledQuizButton onClick={() => navigate("/")}>
          뒤로가기
        </StyledQuizButton>
        <StyledQuizButton
          onClick={() => navigate(`/quiz/${props.type}/${randomNum}`)}
        >
          시작하기
        </StyledQuizButton>
      </QuizButtonLocation>
    </>
  );
}
export default QuizTypeButton;
