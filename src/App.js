import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const dummyExpenses = [
    {id:'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
    {id:'e2', title: 'TV', amount: 799.49, date: new Date(2022, 2, 12)},
    {id:'e3', title: 'New Desk', amount: 450, date: new Date(2022, 2, 6)},
    {id:'e4', title: 'Toilet Paper', amount: 9, date: new Date(2022, 2, 4)},
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = newExpense => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
