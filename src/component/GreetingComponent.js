import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Greeting(props) {
  const logout = () => {
    props.removeUser();
  };
  if (!props.user) {
    return (
      <div>
        <Link to="/login">
          <Button color="primary">Login</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Button color="primary" onClick={logout}>
          Log out
        </Button>
        <span className="mx-5">Hello! {props.user.username}</span>
      </div>
    );
  }
}

export default Greeting;
