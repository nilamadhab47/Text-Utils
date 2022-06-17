// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled", "success");
      // document.title = 'TextUtil - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
      // document.title = 'TextUtil - light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}

        <Navbar title="Chat" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
          <Route path='/about' element={<About/>} /> */}
{/* 
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Try Text Utlis - Word counter , UPPERCASE , lowercase, wide spacings" mode={mode} />

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
