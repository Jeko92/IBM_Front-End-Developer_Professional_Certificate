import React from "react";
class AppInner extends React.Component {
    intervalId = null;
    sendData = () => {
      this.intervalId = setInterval(() => {
        const currTime = new Date().toString();
        this.props.parentCallback(currTime);
      }, 1000);
    };
  
    componentDidMount = () => {
      this.sendData();
    };
  
    componentWillUnmount = () => {
      clearInterval(this.intervalId);
    };
  
    render() {
      return <div></div>;
    }
}
  
class App extends React.Component {
state = { message: "" };

func1 = (childData) => {
    this.setState({ message: childData });
};

render() {
    return (
    <div>
        <AppInner parentCallback={this.func1} />
        <p>{this.state.message}</p>
    </div>
    );
}
}

export default App;