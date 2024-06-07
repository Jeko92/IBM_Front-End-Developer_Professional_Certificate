import React from "react";
import EmployeeDetails from "./ManagingState";


function OrganizationDetails() {
    let employee_designation = 'Project Manager';
    return (
        <>
            <EmployeeDetails employee_designation = {employee_designation}/>
        </>
    )
}

export default OrganizationDetails;