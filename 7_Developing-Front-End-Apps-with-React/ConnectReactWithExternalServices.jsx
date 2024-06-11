import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    user: "None Logged In",
  };

  componentDidMount = () => {
    const req = axios.get("https://api.github.com/users/defunkt");
    req
      .then((response) => {
        this.setState({ user: response.data.name });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ user: "Invalid User" });
      });
  };

  render() {
    return <div>Current user - {this.state.user}</div>;
  }
}

export default App;