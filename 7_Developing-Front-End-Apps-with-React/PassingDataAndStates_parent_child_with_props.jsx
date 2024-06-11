import React from "react";
class AppInner extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const textStyle = {color: this.props.color};
        return (<div>
                    <span style={textStyle}>{this.props.name}</span>
                </div>
        )
    }

}


class App extends React.Component {
    state = {childColor: "green", name:"John"}

    changeColor = () => {
        const newColor = document.getElementById("box-color").value;
        this.setState({childColor:newColor})
    }

    changeName = () => {
        const newName = document.getElementById("box-name").value;
        this.setState({name:newName})
    }

    render(){
        console.log("Inside the render");
        return (
            <div>
                Color <input type="text" onChange={this.changeColor} id="box-color"/>
                <br />
                Name <input type="text" onChange={this.changeName} id="box-name"/>
                <AppInner name={this.state.name} color={this.state.childColor}/>
            </div>
        )
    }

}

export default App;