import React from "react";

function App() {
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Hello React 🚀</h1>
      <p>I am learning React!</p>
      <button onClick={() => alert("React is working!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;