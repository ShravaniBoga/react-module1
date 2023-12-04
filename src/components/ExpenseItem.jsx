import { Component } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.item.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <h2>{props.item.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

{
  /* we can make props fot our custom components */
  //*/ we will get all the data we need from outside of this component ...data is declaredd in main.jsx file
  // ***we r not defining inside "ExpenseItem-component", inside this function
  // ***but instead it is defined in App.jsx and passed into <ExpenseItem>...through attributes
  // ***in this way we share data through react components
  //*/ we can our components reusable and congirable...by using this props concept
  //##### props =reusablility &pass data from one componet to other Component
}
