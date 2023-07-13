import React from "react";
import { Control, Form } from "react-redux-form";
import USER from "../data/users";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    const user = USER.filter((user) => {
      return user.username == value.username && user.password == value.password;
    });
    if (user.length !== 0) {
      this.props.addUser(value);
      this.props.history.push("/");
    } else {
      this.setState({
        error: "wrong username or password",
      });
    }
  }

  render() {
    return (
      <div>
        <Form
          model="loginForm"
          style={{ width: "50%", margin: "auto", padding: "auto 50px" }}
          onSubmit={(user) => this.handleSubmit(user)}
        >
          <h1 className="text-center">Login</h1>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              Username
            </label>
            <Control.text model=".username" className="form-control" />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Password
            </label>
            <Control.text
              type="password"
              model=".password"
              className="form-control"
            />
          </div>
          <div className="text-center">
            <span style={{ color: "red" }}>{this.state.error}</span>
          </div>
          <div className="text-center">
            <button type="Submit" class="btn btn-primary mb-4 ">
              Sign in
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
