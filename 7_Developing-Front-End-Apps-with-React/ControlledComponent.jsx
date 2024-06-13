import React, { Component, useState } from 'react';

export default function App () {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        console.log(`Email: ${email}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <label htmlFor="email">
                <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" required value={email}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
