import "./ExpenseItem.css";

const ExpenseDetails = (props) => {

  return (
    <div className="expense-item__description" key={props.key}>

      <h2>{props.title}</h2>
      <h2 className="expense-item__Location">{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;
