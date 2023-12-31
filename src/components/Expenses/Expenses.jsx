// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {expensesContent} */}
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={props.items} />
            {/* {filterdExpenses.length === 0 && <p>NO expenses found.</p>} */}
            {/* {filterdExpenses.length > 0 && (filterdExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)))} */}



            {/* {filterdExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))} */}

            {/* {filterdExpenses.length === 0 ? (<p>No expenses found.</p>) : (filterdExpenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)))} */}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    );
}

export default Expenses;