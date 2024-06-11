class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('Inside the constructor');
    }

    componentDidMount = () => {
        console.log('Inside the componentDidMount');
    }

    render() {
        console.log('Inside the render');
        return (
            <div>
                The component is rendered
            </div>
        );
    }
}

export default App;