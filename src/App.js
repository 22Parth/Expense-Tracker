import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Table",
    amount: 10000,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Laptop",
    amount: 25000,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Wooden Desk",
    amount: 3000,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e5",
    title: "Ps5",
    amount: 47500,
    date: new Date(2023, 3, 17),
  },
  {
    id: "e6",
    title: "Phone",
    amount: 27000,
    date: new Date(2023, 4, 8),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
