import "../../styles/ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ addExpense, hide }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const sumbitHandler = (event) => {
    event.preventDefault();

    // new expense item
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // update from app component
    addExpense(expenseData);

    clearInputs();
    hide();
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const clearInputs = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={sumbitHandler}>
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountHandler}
            type="nubmer"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={date}
            onChange={dateHandler}
            type="date"
            min="2019-01-01"
            max="2022-11-01"
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={hide}>Cancel</button>
          <button type="sumbit">add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
