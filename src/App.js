import React from 'react';
import {SalaryCalc} from './container/SalaryCalc';
export default class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <SalaryCalc/>
      </div>
    );

  }
}