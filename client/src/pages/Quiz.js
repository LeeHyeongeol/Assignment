import CheckBox from "../components/CheckBox";
import styled, { css } from "styled-components";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ProblemTitle from "../components/ProblemTitle";
import ProblemButton from "../components/ProblemButton";
import FrontProblem from "../components/FrontProblem";
import BackendProblem from "../components/BackProblem";
import InfraProblem from "../components/InfraProblem";

const QuizContainer = styled.div`
  margin: 200px;
`;
//유저가 직무 타입 선택한것을 props로 받음
function Quiz() {
  let params = useParams().id;
  console.log("Quiz컴포넌트접속", window.location.href.slice(27));
  let location = window.location.href.slice(27).split("/");
  console.log("location", location);
  let problemType = location[0];
  //   let problemType = FrontProblem;
  console.log("problemType!!!", problemType, "params", params);
  let problem;

  //문제 타입
  if (problemType === "FrontEnd") {
    problem = FrontProblem;
  } else if (problemType === "BackEnd") {
    problem = BackendProblem();
  } else {
    problem = InfraProblem();
  }
  console.log("@@@#@#", problem);

  return (
    <>
      <ProblemTitle title={problem[params - 1].title} />
      <QuizContainer>
        {problem[0].content.map((pr, i) => {
          return <CheckBox content={problem[params - 1].content[i]} key={i} />;
        })}
      </QuizContainer>
      <ProblemButton />
      <Outlet></Outlet>
    </>
  );
}

export default Quiz;
