import React from 'react';
import { SalaryCalcinput } from "../components/salaryInput";
import { SalaryCalcOutput } from "../components/SalaryOutput";

export class SalaryCalc extends React.Component {
    constructor(props) {
        super(props);
        this.hra = 0;
        this.da = 0;
        this.gs = 0;
        this.ta = 0;
        this.pf = 0;
        this.tax = 0;
        this.netSalary = 0;
        this.basicSalary =0;
        this.state = {ns:0};

    }
    takeSalary(event){
        this.basicSalary = parseInt(event.target.value);
        console.log("Basic Salary is ",this.basicSalary);
    }
    Salary() {
        this.hra = 0.30 * this.basicSalary;
        this.da = this.basicSalary * 0.10;
        this.ta = this.basicSalary * 0.20;
        this.pf = this.basicSalary * 0.05;
        this.gs = this.basicSalary + this.hra + this.da + this.ta - this.pf;
        // console.log(this.hra);
        this.tax = 0.10 * this.gs;
        this.netSalary = this.gs - this.tax;
        console.log("Salary Called.... ",this.hra, this.da, this.da, this.ta, this.pf, this.gs, this.tax, this.netSalary);
        this.setState({ns:this.netSalary});
    }

    render() {
        return (
            <div>
                <h2>Salary Calc App</h2>
                <SalaryCalcinput takeSalary={this.takeSalary.bind(this)} Sal={this.Salary.bind(this)} />
                <SalaryCalcOutput hra={this.hra}
                    da={this.da}
                    ta={this.ta}
                    pf={this.pf}
                    gs={this.gs}
                    tax={this.tax}
                    netSalary={this.netSalary} />
            </div>
        );
    }
}