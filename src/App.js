// App.js
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/adminSignUp";

function App() {
  return (
    <div className="App">
      {<HomePage/>}
      {<Admin/>};      
    </div>
  );
}

export default App;
