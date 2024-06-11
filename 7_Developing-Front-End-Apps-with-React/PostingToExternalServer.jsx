import React from "react";
import axios from "axios";
import { response } from "express";


export default class App extends React.Component {
    state = { completionStatus: "" }

    postDataToServer = () => {
            axios.post("https://localhost:3000/user?name="+document.getElementById("name").value + "&gender=" +document.getElementById("gender").value
        ).
        then(response => {
            this.setState({completionStatus:response.data})
        }).
        catch(error=>{
            this.setState({completionStatus:"Operation failure"});
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                Enter the name<input type="text" id="name"></input>
                <br />
                Enter the gender <input type="text" id="gender"></input>
                <br />
                <button onClick={this.postDataToServer}>Post Data</button>
                <p>{this.state.completionStatus}</p>
            </div>
        )
    }
  
}