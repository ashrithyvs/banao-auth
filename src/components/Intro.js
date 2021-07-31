import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container } from "react-bootstrap";
import firebase from "../firebase";

function Intro() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const handleSignout = async (e) => {
    await firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("User Logged Out!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container className="my-5">
      <div className="mx-auto my-auto text-center">
        <h2>Welcome!</h2>
        <p>Your Email address is {user.email}</p>
        <Button variant="outline-dark" onClick={handleSignout}>
          Signout
        </Button>
      </div>
    </Container>
  );
}

export default Intro;
