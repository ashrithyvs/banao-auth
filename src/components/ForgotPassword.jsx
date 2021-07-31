import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Kindly check your email to reset your password!");
        history.push("/");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center my-4">Forgot Password</h2>

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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ForgotPassword;
