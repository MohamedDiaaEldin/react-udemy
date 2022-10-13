import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prv)=>{            
      return ([...prv, user])
    });
  };
  return (
    <div>
      <AddUser addUser={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
