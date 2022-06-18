import "./App.css";

function App() {
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
      <h1 className="key-word">App.js</h1>
      </center>
    </div>
  );
}

export default App;
