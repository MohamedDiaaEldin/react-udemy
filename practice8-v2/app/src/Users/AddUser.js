import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ addNewUser }) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(undefined)

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title:"Invalid input", 
        message:"Please enter a valid name and age   "
      })
      return;
    }

    if (+age < 1) {
      setError({
        title:"Invalid age", 
        message:"Please enter a valid age > 0 "
      })
      return;
    }

    addNewUser(username, age);
    resetInputs();
  };

  const hideErrorModal = ()=>{
    setError(null)
  }
  const resetInputs = () => {
    setUserName("");
    setAge("");
  };
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} hideErrorModal={hideErrorModal} /> }
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={username}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="sumbit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
