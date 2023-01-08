import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert  = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode =()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
     <Navbar about="About Us" mode={Mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3" >
     <Routes>
          <Route exact path="/about" element={<About mode={Mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} displayText="Try Text-Optimizer" subHeading=" Manipulate Text Eaily || UPPERCASE lowercase Conversion || Remove Extra Spaces || much more! " mode={Mode}/>}>
          </Route>
          <Route exact path="/Text-Optimizer" element={<Navigate to="/"/>}/>
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;
