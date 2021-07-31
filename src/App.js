import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Container>
            {user ? (
              <Navbar.Brand className="mx-auto py-3">Banao-Auth</Navbar.Brand>
            ) : (
              <Nav className="mx-auto">
                <Nav.Link href="#home">
                  <Link to="/">
                    <Button variant="outline-light">Login</Button>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link to="/register">
                    <Button variant="outline-light">Register</Button>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link to="/forgot-password">
                    <Button variant="outline-light">Forgot Password</Button>
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar>
      </div>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/">{user ? <Intro /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
