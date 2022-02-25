import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState('2022');

  const filterHandler = (filterYear) => {
    console.log(filterYear);
    setYear(filterYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} defaultYear={year} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>
    </Card>
  )
}

export default Expenses;