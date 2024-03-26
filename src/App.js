import { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout( () => {setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#404040";
      showAlert("light mode has been enabled", "success");
    } else {
      setMode ("dark");
      document.body.style.backgroundColor = "#404040";
      document.body.style.color = "white";
      showAlert("dark mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/Home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
