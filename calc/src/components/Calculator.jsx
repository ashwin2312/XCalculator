import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState("");

  let buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  let keypad = buttons.map((btn) => {
    return (
      <button
        type="button"
        key={btn}
        value={btn}
        onClick={() => {
          setDisplay((pre) => pre + btn);
        }}
        style={{
          border: "2px solid black",
          width: "80px",
          height: "80px",
          fontSize: "25px",
        }}
      >
        {btn}
      </button>
    );
  });
  return (
    <div>
      <h1>React Calculator</h1>
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          style={{ height: "30px", width: "300px" }}
          value={display}
        />
      </div>
      <div>{result}</div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {keypad}
      </div>
    </div>
  );
};

export default Calculator;
