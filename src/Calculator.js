//import React from 'react';
import React, { Component } from "react"
//import PropTypes from 'prop-types';
//import calcKeys from "./calcKeys";
import './style.css';
import './App.css';


class Calculator extends Component {
  constructor(props) {
  super(props);
    this.state = {
      calcKeys: [
      {
        calItem1: "1",
        calItem2: "2",
        calItem3: "3",
        calItem4: "+",
      },
      {
        calItem5: "4",
        calItem6: "5",
        calItem7: "6",
        calItem8: "-",
      },
      {
        calItem9: "7",
        calItem10: "8",
        calItem11: "9",
        calItem12: "*",
      },
      {
        calItem13: "C",
        calItem14: "0",
        calItem15: "=",
        calItem16: "/"
      }
    ]
  };
  }
  render() {

  const calculatorLayout = this.state.calcKeys.map((calcItems, index) => (

    <li key={index}>
      <p> {calcItems.calItem1}
    </p>
    </li>


  ));
  return (

    <div className="calculator-item">
      <ul>
      { calculatorLayout}
      </ul>
    </div>
  );

}
}

export default Calculator;
