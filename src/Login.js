import React, { useState, useEffect } from "react";
import { subscribe, initialiseState } from "./services/onLoad";

function Login() {
  const eeID = 99999;
  const pn = 123;

  useEffect(function() {
    subscribe();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
      .then(initialiseState);
    } else {
      console.warn('Service workers aren\'t supported in this browser.');
    }
  },[]);

  const [employeeId, setEmployeeId] = useState();
  const [pin, setPin] = useState();


  function onSubmitHandle(e) {
    e.preventDefault();

    if(eeID === employeeId && pn === pin) {
      console.log("Ask for notification permission");
    }
  }

  return (
    <div className="loginForm">
      <h3>eSystemsMobile</h3>
      <form onSubmit={onSubmitHandle}>
        <input onChange={e => setEmployeeId(e.target.value)} type="text" name="employeeId" placeholder="EmplyeeID"/>
        <input onChange={e => setPin(e.target.value)} type="password" name="pin" placeholder="PIN" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;