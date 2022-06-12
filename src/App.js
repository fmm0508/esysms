import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Patient from "./Patient";
import AddPatient from "./backend/AddPatient";


function App() {
  return (
    <center>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/backend" element={<AddPatient />} />
      </Routes>
    </Router>
    </center>
  );
}

export default App;
