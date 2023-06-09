import React, { useState } from "react";
// import './App.css';
import './Register.css';
import './Login.css';
import {Login} from "./Login";
import {Register} from "./Register";
import NavBar from "./NavBar";



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm= (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <NavBar/>
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    </>
  );
}

export default App;
