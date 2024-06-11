import React from "react";
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "John",
            age: 28
        };
    }


    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        );
    }
}

export default TestComponent;