
// PR 7: Simple Counter Application in React

import React, { useState } from "react";

function App() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      {/* Display count */}
      <h2>{count}</h2>

      {/* Buttons */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <br />

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <br />
      <br />

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
