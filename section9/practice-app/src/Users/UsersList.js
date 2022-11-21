import Card from "../UI/Card";
import classes from './UsersList.module.css'
const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.age}`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
