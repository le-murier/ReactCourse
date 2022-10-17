import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>This is Home page</h2>
      <nav>
        <Link to="users">Users</Link>
      </nav>
    </div>
  );
};

export default Home;
