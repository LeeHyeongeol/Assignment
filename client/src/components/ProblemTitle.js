import styled from "styled-components";

const TitleLocation = styled.div`
  // margin-top: 20px;
  justify-content: center;
`;

function ProblemTitle(props) {
  console.log("PRPRPRPRP", props);
  return (
    <>
      <TitleLocation>
        <h3>질문</h3>
        <p>{props.title}</p>
      </TitleLocation>
    </>
  );
}
export default ProblemTitle;
