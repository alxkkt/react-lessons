// import Accordion from "./components/Accordion/Accordion.jsx";
import { Component } from "react";

import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";

class App extends Component {
  // return (
  //   <div className="App">
  //     <div className="container">
  //       <Accordion />
  //     </div>
  //   </div>
  // );
  state = {
    name: "",
    email: "",
    password: "",
  };
  addUser = (data) => {
    this.setState({ ...data });
  };
  render() {
    return (
      <>
        <UserForm onSubmit={this.addUser} />
        <UserInfo {...this.state} />
      </>
    );
  }
}

export default App;
