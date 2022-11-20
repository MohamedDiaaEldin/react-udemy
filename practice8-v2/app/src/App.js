import AddUser from "./Users/AddUser";
import "./App.css";
import { useState } from "react";
import UserList from "./Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = (name, age) => {
    setUsers((prv) => {
      console.log([
        ...prv,
        { name: name, age: age, id: Math.random().toString() },
      ]);
      return [...prv, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
