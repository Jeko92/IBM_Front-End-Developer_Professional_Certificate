import React, { useState }  from "react";

const CtnApp = () => {
    // Declare a new state variable "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} many times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default CtnApp;