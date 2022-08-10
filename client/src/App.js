import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StartButton from "./components/StartButton";
import LoadingButton from "./components/LoadingButton";
import Quiz from "./pages/Quiz";
import Signin from "./pages/Signin";
import Main from "./pages/Main";
// import Loading from "./components/Loading";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
// function simulateNetworkRequest() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

// function LoadingButton() {
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     if (isLoading) {
//       simulateNetworkRequest().then(() => {
//         setLoading(false);
//       });
//     }
//   }, [isLoading]);

//   const handleClick = () => setLoading(true);

//   return (
//     <Button
//       variant="primary"
//       disabled={isLoading}
//       onClick={!isLoading ? handleClick : null}
//     >
//       {isLoading ? "잠시만기다려주세요" : "결과보기"}
//     </Button>
//   );
// }

export default App;
