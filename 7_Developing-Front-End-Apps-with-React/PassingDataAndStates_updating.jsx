class App extends React.Component {
    state = {
        counter: "0"
    }

    incrementCounter = () => {
        this.setState({
            counter: parseInt(this.state.counter) + 1
        })
    }

    shouldComponentUpdate = () => {
        console.log("Inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log("Inside getSnapshotBeforeUpdate");
       console.log(`Prev counter is: ${prevState.counter}`);
       console.log(`New counter is: ${this.state.counter}`);
       return prevState;
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate");
    }

    render(){
        console.log("Inside render");
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementCounter}>Click Me!</button>
            </div>
        );
    }
}

export default App;