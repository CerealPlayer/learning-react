import React, { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "../Chart/ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [year, setYear] = useState('2022');

  const filterHandler = (filterYear) => {
    setYear(filterYear);
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

  

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={filterHandler} defaultYear={year} />
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses;