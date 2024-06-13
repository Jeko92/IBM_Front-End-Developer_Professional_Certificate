import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

function SideEffect (){

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://api.npoint.io/d542b9ad99f501ab3dbf')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFoods(data)
            })
            .catch(error => console.log('Error fetching users:', error));
    }, [])  // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <h1>Food List</h1>
            <ul>
                {foods.map(food => {
                    return (
                        <>
                        <li key={food.id}>
                            <h2>{food.name}</h2>
                        </li>
                        <p>{food.description}</p>
                        <p>{food.price}</p>
                        <p>{food.category}</p>
                        <p>{food.ingredients}</p>
                        <p>{food.ingredients.join(', ')}</p>
                        <img src={food.image_url} alt="" height="100px" width="100px" />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

function App () {
    return <SideEffect/>
}

ReactDOM.render(<App/>, document.getElementById('root'));