import React from 'react';
export const SalaryCalcinput = (props) => {
    return (
        <div>
            <label htmlFor="">Basic Salary</label>
            <input onChange={props.takeSalary} type="text" placeholder="Type your salary"  />
            <button onClick={props.Sal}>Compute</button>
        </div>
    )
}