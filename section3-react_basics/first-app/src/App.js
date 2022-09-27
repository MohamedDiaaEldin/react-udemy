import ExpenseItem from "./components/ExpenseItem";

function App() {  
  const expenses = [
    {
      title: "car Insurance",
      amout: 379,
      date: new Date(2021, 2, 28),
    },
    {
      title: "apple laptop",
      amout: 10000.5,
      date: new Date(2022, 3, 1),
    },
    {
      title: "smart watch",
      amout: 600,
      date: new Date(2020, 2, 6),
    },
  ];
  

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((item) => (
        <ExpenseItem  key={item.title} title={item.title} date={item.date} amount={item.amout} />
      ))}
    </div>
  );
}

export default App;