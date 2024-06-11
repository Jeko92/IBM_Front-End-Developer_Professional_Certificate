import React from "react";

class TestComponent extends React.Component {
    render(){
        return <div>
            Hi {this.props.name}
            </div>
    }
}

// Passing the props as examples to the test component
<>
    <TestComponent name="John"/>
    <TestComponent name="Jill"/>
</>

