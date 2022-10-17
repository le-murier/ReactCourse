import { Link, Outlet, useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>
      <Link to="/.">Main</Link>
      <nav>
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default User;
