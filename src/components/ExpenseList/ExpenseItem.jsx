import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date}></ExpenseDate>
      <ExpenseDetails
        amount={props.item.amount}
        title={props.item.title}
        location={props.item.LocationOfExpenditure}
      />
    </Card>
  );
};
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
