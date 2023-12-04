import { Component } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log(props, "varun");
  const month = props.item.date.toLocaleString("en-US", { month: "long" });
  const day = props.item.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.item.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

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
