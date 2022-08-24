import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
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
function QuizStartButton(props) {
  let navigate = useNavigate();
  let arr = [];
  let randomNum = parseInt(Math.random() * 5);
  //   const handleRandomNum = () => {
  //     for (let i = 1; i <= 5; i += 1) {
  //       let randomNum = Math.floor(Math.random() * 20) + 1;
  //       arr.push(randomNum);
  //     }
  //     return arr;
  //   };

  //   useEffect(() => {
  //     handleRandomNum();
  //   }, []);

  console.log("진짜arr", arr);
  //버튼 클릭 순간 db에 문제 요청해서 가져와야 함
  //   const handleProblem = () => {
  //     axios.get(`http://localhost:8000/quiz/${props.type}/${props.language}`);
  //   };
  //   handleProblem();

  console.log("asdasdasdasd", props);
  return (
    <>
      <QuizButtonLocation>
        <StyledQuizButton onClick={() => navigate("/quiz")}>
          뒤로가기
        </StyledQuizButton>
        <StyledQuizButton
          onClick={() =>
            props.language
              ? navigate(`/quiz/${props.type}/${props.language}/${randomNum}`)
              : alert("문제 종류를 선택해주세요")
          }
        >
          다음단계
        </StyledQuizButton>
      </QuizButtonLocation>
    </>
  );
}
export default QuizStartButton;
