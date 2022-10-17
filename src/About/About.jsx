import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import users from "../Data";

const About = () => {
  const { userId } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(users.find((user) => user.id === userId));
  }, []);

  return (
    <div>
      <h2>This is About page</h2>
      <p>I am {user.fullName}</p>
      <p>And {user.about}</p>
    </div>
  );
};

export default About;
