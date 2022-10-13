import Card from "../UI/Card";
import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
  console.log("in UserList ", users);
//   if (users.length === 0) {
//     return <p>there is no users</p>;
//   }

  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {`${user.userName} ${user.age}`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
