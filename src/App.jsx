import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      LocationOfExpenditure: "hyderabad",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      LocationOfExpenditure: "mumbai",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      LocationOfExpenditure: "Pune",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      LocationOfExpenditure: "Kerla",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <>
      <h1>shravani</h1>
      {expenses.map((expense) => (
        <ExpenseItem item={expense}></ExpenseItem>
      ))}
    </>
  );
}

export default App;
