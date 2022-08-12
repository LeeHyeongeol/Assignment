import styled from "styled-components";

const TitleLocation = styled.div`
  right: 150px;
  text-align: justify;
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
