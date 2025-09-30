import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Go to Register" : "Go to Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
