import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
//  

import About from "./components/About";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 3000);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <NavBar
      title="TextUtils2"
      aboutText="TextAbouts"
      mode={mode}
      toggleMode={toggleMode}
    />
    <Alert alert={alert} />
        {/*  */}
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
                
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
