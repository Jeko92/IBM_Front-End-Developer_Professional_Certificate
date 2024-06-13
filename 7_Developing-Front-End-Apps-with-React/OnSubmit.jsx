import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function FormData(){
    const [empName, setEmpName] = useState('');

    const handleChange = (event) => {
        setEmpName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Form Submitted: ${empName}`);
    }
    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={empName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


function App() {
    return <FormData />
}

ReactDOM.render(<App />, document.getElementById('root'));