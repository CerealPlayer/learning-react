import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
    {title: 'TV', amount: 799.49, date: new Date(2022, 2, 12)},
    {title: 'New Desk', amount: 450, date: new Date(2022, 2, 6)},
    {title: 'Toilet Paper', amount: 9, date: new Date(2022, 2, 4)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
