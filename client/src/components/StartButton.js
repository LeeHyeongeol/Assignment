import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function StartButton(props) {
  let navigate = useNavigate();
  console.log(props);
  return (
    <>
      <Button variant="primary" onClick={() => navigate(props.link)}>
        {props.text}
      </Button>{" "}
    </>
  );
}

export default StartButton;
