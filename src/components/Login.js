import { useState } from "react";
import firebase from "../firebase";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const auth = firebase.auth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <Container className="my-5">
      <h2 className="text-center my-4">Login</h2>

      <Form className="mx-auto w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            name="password"
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
