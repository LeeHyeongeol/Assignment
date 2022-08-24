import ProblemCheckBox from "../components/ProblemCheckBox";
import styled, { css } from "styled-components";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ProblemTitle from "../components/ProblemTitle";
import ProblemButton from "../components/ProblemButton";
import FrontProblem from "../components/FrontProblem";
import BackendProblem from "../components/BackProblem";
import InfraProblem from "../components/InfraProblem";

const QuizContainer = styled.div`
  // justify-content: center;
  // margin: 200px;
  // display: flex;
`;
//유저가 직무 타입 선택한것을 props로 받음
const Quiz = () => {
  let params = useParams().id;
  console.log("Quiz컴포넌트접속", window.location.href);
  let location = window.location.href.slice(27).split("/");
  console.log("location", location);
  let problemType = location[0];
  //   let problemType = FrontProblem;
  console.log(
    "Type!!!",
    problemType,
    "language!!",
    location[1],
    "params",
    params
  );
  const [type2, setType2] = useState("");
  const handleTypeValue2 = (value) => {
    setType2(value);
  };
  console.log("type2#####", type2);
  let problem;

  //문제 타입
  if (problemType === "frontend") {
    problem = FrontProblem();
  } else if (problemType === "backend") {
    problem = BackendProblem();
  } else {
    problem = InfraProblem();
  }
  //정답
  console.log("@@@#@#", problem);
  let answer = problem[0].answer;

  return (
    <>
      <ProblemTitle title={problem[params - 1].title} />
      <QuizContainer>
        {problem[0].content.map((pr, i) => {
          return (
            <ProblemCheckBox
              content={problem[params - 1].content[i]}
              key={i}
              handleTypeValue2={handleTypeValue2}
            />
          );
        })}
      </QuizContainer>
      <ProblemButton select={type2} answer={answer} urlInfo={location} />
      <Outlet></Outlet>
    </>
  );
};

export default Quiz;
