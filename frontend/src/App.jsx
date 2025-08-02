import "./App.css";
import Home from "./component/home";
import { Form } from "./component/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
