import "./App.css";
import React, { useState } from "react";
import { onMessageListener } from "./firebase_init";
import Notifications from "./components/Notifications";
import ReactNotification from "./components/ReactNotification";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: ""});
  console.log(show, notification);
  onMessageListener()
    .then(payload => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      });
      console.log(payload);
    }).catch(err => {
      console.error("failed: ", err);
    });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("firebase-messaging-sw.js")
      .then(function (registration) {
        console.log(registration);
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
  return (
    <div>
      <center>
        { show ? 
          (
            <ReactNotification 
              title={notification.title}
              body={notification.body}
            />
          ) : 
          (
            <></>
          )
        }
      <Notifications />
      </center>
    </div>
  );
}

export default App;
