import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
// Ref are good while reading but not recommended to update the dom
import { useState, useRef } from "react"; 
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ addNewUser }) => {
  const usernameInputRef = useRef()
  const  ageInputRef = useRef()

  const [error, setError] = useState(undefined);

  const addUserHandler = (event) => {
    event.preventDefault();
   
    const username = usernameInputRef.current.value
    const age = ageInputRef.current.value

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age   ",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age > 0 ",
      });
      return;
    }

    addNewUser(username, age);
    resetInputs();
  };

  const hideErrorModal = () => {
    setError(null);
  };
  const resetInputs = () => {
    // is ok hear to manipulate the dom but not recommended 
    // we can use state 
    // The component became uncontrolled component because we are not relying on React to update  the dom
    usernameInputRef.current.value = ""
    ageInputRef.current.value = ""
  };
  
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          hideErrorModal={hideErrorModal}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name</label>
          <input
            ref={usernameInputRef}
            id="username"
            type="text"            
          />
          <label htmlFor="age">Age (years)</label>
          <input
            ref={ageInputRef}
            id="age"
            type="number"            
          />
          <Button type="sumbit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
