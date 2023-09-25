import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
    </>
  );
}

export default App;
