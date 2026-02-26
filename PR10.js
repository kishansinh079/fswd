import React, { useState, useEffect } from "react";

// Custom Hook
function useLocalStorage(key, initialValue) {
  const readValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [savedText, setSavedText] = useLocalStorage("savedText", "");
  const [inputText, setInputText] = useState("");

  const handleSave = () => {
    setSavedText(inputText);
    setInputText(""); // optional: clear input after saving
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>useLocalStorage Example</h2>

      <textarea rows="4" cols="40" placeholder="Type something..." value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ padding: "10px", width: "100%" }} />

      <br />
      <br />

      <button onClick={handleSave} style={{ padding: "8px 16px" }}>
        Save
      </button>

      <h3 style={{ marginTop: "30px" }}>Saved String:</h3>
      <p style={{ background: "#f4f4f4", padding: "10px" }}>{savedText}</p>
    </div>
  );
}

export default App;
