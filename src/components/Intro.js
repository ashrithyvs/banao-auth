import React from "react";
import { Button, Container } from "react-bootstrap";
import firebase from "../firebase";

function Intro() {
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
      <div className="mx-auto">
        <h2>Welcome!</h2>
        <Button onClick={handleSignout}>Signout</Button>
      </div>
    </Container>
  );
}

export default Intro;
