import React, {useState} from "react";

function AddPatient() {
  
  const [patientName, setPatientName] = useState("");

  function onSubmitHandle(e) {
    e.preventDefault();
    localStorage.setItem("storedPatientName", patientName);
  }

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={onSubmitHandle}>
        <input 
          type="text" 
          name="patient" 
          placeholder="Patient Name"
          onChange={e => setPatientName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddPatient;