import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Greeting from "./GreetingComponent";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  return (
    <div className="border">
      <Navbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavbarBrand>PRODUCT MANAGER</NavbarBrand>
        </Link>
        <Greeting user={props.user} removeUser={props.removeUser} />
      </Navbar>
    </div>
  );
};

export default TopBar;
