import { useState } from "react";
import "../../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExepense from "./AddNewExepense";

const NewExpense = ({ addExpense }) => {
  const [isOpened, setIsOpened] = useState(false);

  const show = () => {
    setIsOpened(true);
  };
  const hide = () => {
    setIsOpened(false);
  };

  if (isOpened) {
    return <ExpenseForm addExpense={addExpense} hide={hide} />;
  }

  return <AddNewExepense show={show} />;
};

export default NewExpense;
