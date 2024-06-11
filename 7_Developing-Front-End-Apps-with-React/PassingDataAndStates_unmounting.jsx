import React from "react";
class AppInner extends React.Component {
    componentWillUnmount = () => {
        console.log("Inside the component will unmount");        
    }

    render(){
        return <div>Inner component</div>
    }

}
class App extends React.Component {
    state = {innerComponent: <AppInner/>}
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({innerComponent: <div>unmounted</div>})
        }, 5000)
    }

    render(){
        console.log("Inside the render");
        return (
            <div>
                {this.state.innerComponent}
            </div>
        )
    }

}

export default App;