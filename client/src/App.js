import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StartButton from "./components/StartButton";
import LoadingButton from "./components/LoadingButton";
import Quiz from "./pages/Quiz";
import { QuizType } from "./pages/QuizType";
import Signin from "./pages/Signin";
import Main from "./pages/Main";
import FrontProblemType from "./pages/FrontendProblemType";
import { BackendProblemType } from "./pages/BackendProblemType";
import InfraProblemType from "./pages/InfraProblemType";
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
        <Route
          path="/quiz"
          element={<QuizType text={["FrontEnd", "BackEnd", "Infra"]} />}
        />
        <Route path="/quiz/frontend" element={<FrontProblemType />} />
        <Route path="/quiz/backend" element={<BackendProblemType />} />
        <Route path="/quiz/infra" element={<InfraProblemType />} />
        <Route path="/quiz/frontend/react/:id" element={<Quiz />} />
        <Route path="/quiz/frontend/vue/:id" element={<Quiz />} />
        <Route path="/quiz/frontend/angular/:id" element={<Quiz />} />
        <Route path="/quiz/backend/java/:id" element={<Quiz />} />
        <Route path="/quiz/backend/node/:id" element={<Quiz />} />
        <Route path="/quiz/backend/python/:id" element={<Quiz />} />
        <Route path="/quiz/Infra/aws/:id" element={<Quiz />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
