import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/index";
import Users from "./Users/index";
import User from "./User/index";
import About from "./About/index";
import users from "./Data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<User />}>
              <Route path="about" element={<About />} />
            </Route>
          </Route>
          <Route path={"*"} element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
