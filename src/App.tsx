import { useState } from "react";
import LogIn from "./Components/LogIn/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/LogIn/Login";

/*
  Components that I will need for this project
    -Navigation component
    -LogIn/Register
    -Input components for text input
    -Weather cards.
    
  Things to consider besides how the wireframe will look for this app. 
    -What the data structure will look like for the users
    -What the weather cards will look like
     
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
