import { Component } from "react";

import styles from "./UserForm.module.css";

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { name, email, password } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default UserForm;
