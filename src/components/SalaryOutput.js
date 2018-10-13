import React from "react";
export const SalaryCalcOutput = (props) => {
    return (
        <div> <h2>NET SALARY is: {props.netSalary}</h2>
            <h3>H.R.A. is {props.hra}  </h3>
            <h3>D.A. is {props.da}  </h3>
            <h3>T.A. is {props.ta}  </h3>
            <h3>P.F. is {props.pf}  </h3>
            <h3>G.S. is {props.gs}  </h3>
            <h2>TAX is {props.tax}  </h2>
           

        </div>
    )
}