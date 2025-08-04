import "./App.css";
import Home from "./component/home";
import { Form } from "./component/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserCard } from "./component/UserCard";
import { Register } from "./page/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="form" element={<Form />}></Route>
        <Route path="userCard" element={<UserCard />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
