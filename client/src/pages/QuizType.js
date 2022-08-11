import CheckBox from "../components/CheckBox";
import styled from "styled-components";
import QuizTypeButton from "../components/QuizTypeButton";

const TypeTitleLocation = styled.h2`
  text-align: center;
  margin-top: 20%;
`;
const QuizTypeStyle = styled.div`
  margin: 100px;
`;
function QuizType(props) {
  console.log("QuizType", props.text);
  return (
    <>
      <TypeTitleLocation>본인의 직무를 선택하십시오</TypeTitleLocation>
      <QuizTypeStyle>
        <CheckBox text={props.text[0]} />
        <CheckBox text={props.text[1]} />
        <CheckBox text={props.text[2]} />
      </QuizTypeStyle>
      <QuizTypeButton />
    </>
  );
}

export default QuizType;
