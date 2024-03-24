import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/booking" element={<h1>This is booking</h1>}></Route>
      <Route path="/status" element={<h1>This is status</h1>}></Route>
      <Route path="/help" element={<h1>This is help</h1>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
