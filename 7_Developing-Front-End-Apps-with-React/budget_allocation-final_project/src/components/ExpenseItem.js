import React, { useContext } from 'react';
import { TiDelete} from 'react-icons/ti';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}><FaCirclePlus  style={{color:"green"}}/></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}><FaCircleMinus style={{color:"red"}}/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{color:"gray"}}></TiDelete ></td>
        </tr>
    );
};

export default ExpenseItem;