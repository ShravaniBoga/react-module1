import { useState } from "react";
import ExpenseItem from "./components/ExpenseList/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  // {
  //   LocationOfExpenditure: "hyderabad",
  //   title: "Toilet Paper",
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // {
  //   LocationOfExpenditure: "mumbai",
  //   title: "New TV",
  //   amount: 799.49,
  //   date: new Date(2021, 2, 12),
  // },
  // {
  //   LocationOfExpenditure: "Pune",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   LocationOfExpenditure: "Kerla",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense, "app.js");
    setExpenses((prevExpense) => {
      return [...prevExpense, expense];
    });
  };
  return (
    <>
      <h1>let's start</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <h2>ExpenseItems Details</h2> */}

      {expenses.map((expense) => (

        < ExpenseItem item={expense} />

      ))
      }
    </>
  );
};

export default App;
