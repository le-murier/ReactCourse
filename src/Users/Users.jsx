import { Link, Outlet } from "react-router-dom";

const Users = ({ users }) => {
  return (
    <>
      <div>
        <h2>This is Users page</h2>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.fullName}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Users;
