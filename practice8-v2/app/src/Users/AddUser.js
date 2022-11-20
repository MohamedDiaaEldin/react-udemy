import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input id="username" type="text" />
        <label htmlFor="age">age (years)</label>
        <input id="age" type="number" />
        <Button type="sumbit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
