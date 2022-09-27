import ExpenseItem from "./ExpenseItem"
const Expenses = ({expenses})=>{

    return expenses.map((item) => (
      <ExpenseItem  key={item.title} title={item.title} amount={item.amount} date={item.date} />
    ));


}

export default Expenses