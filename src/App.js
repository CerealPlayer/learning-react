import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
    {title: 'TV', amount: 799.49, date: new Date(2022, 2, 12)},
    {title: 'New Desk', amount: 450, date: new Date(2022, 2, 6)},
    {title: 'Toilet Paper', amount: 9, date: new Date(2022, 2, 4)},
  ]
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
