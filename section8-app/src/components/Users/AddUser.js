import { useState } from "react";
import ErrorModol from "../UI/ErrorModol";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = ({ addUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const newUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Inputs",
        message: "make sure to enter username and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Inputs",
        message: "age must be greater than 0",
      });
      return;
    }
    console.log(userName, age);
    addUser({ userName: userName, age: age, id: Math.random().toString() });
    resetInputs();
  };

  const updateUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const updateAgeNameHandler = (event) => {
    setAge(event.target.value);
  };
  const resetInputs = () => {
    setUserName("");
    setAge("");
  };

  const closeErrorModol = () => {
    console.log("clicked");
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModol
          title={error.title}
          message={error.message}
          closeErrorModol={closeErrorModol}
        />
      )}
      
      <Card className={styles.input}>
        <form onSubmit={newUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            value={userName}
            onChange={updateUserNameHandler}
            id="username"
            type="text"
          />

          <label htmlFor="age">Age</label>
          <input
            value={age}
            onChange={updateAgeNameHandler}
            id="age"
            type="text"
          />
          <Button type="submit" onClick={newUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
