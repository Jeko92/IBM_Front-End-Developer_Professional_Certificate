import React from "react";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp_id: "",
            emp_email: ""
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { emp_id, emp_email } = this.state;
        const { employee_designation } = this.props;
        return (

            <div className="EmployeeDetails">
                <input type="text" name="emp_id" id="emp_id"  value={emp_id} onChange={this.handleInputChange} placeholder="Enter Employee ID"/>
                <input type="email" name="emp_email" value={emp_email} onChange={this.handleInputChange} placeholder="Enter Employee Email" id="emp_email" />
                <button onClick={()=>alert(`Employee ID: ${emp_id}, Employee Email: ${emp_email} Designation: ${employee_designation}`)}>Show Details</button>
            </div>

        )
    }
}

export default EmployeeDetails;