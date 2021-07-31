import { useState } from "react";
import firebase from "../firebase";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase.auth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => history.push("/"))
      .catch((error) => console.log(error));
  };

  return (
    <Container className="my-5">
      <h2 className="text-center my-4">Register</h2>
      <Form className="mx-auto w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter email"
            value={email}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
