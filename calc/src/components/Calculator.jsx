import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState("");

  function displayCharacters(btn) {
    if (btn !== "=" && btn !== "C") {
      setDisplay((prev) => prev + btn);
    }
    if (btn === "C") {
      setDisplay("");
      setResult(null);
    }
    if (btn === "=" && display !== "") {
      setResult(eval(display));
    }
    if (btn === "=" && display === "") {
      setResult("Error");
    }
  }

  console.log("result::", result);

  let buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  let keypad = buttons.map((btn) => {
    return (
      <button
        type="button"
        key={btn}
        value={btn}
        onClick={() => {
          displayCharacters(btn);
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
      <div>
        <input
          type="text"
          style={{ height: "30px", width: "300px", fontSize: "20px" }}
          value={display}
          readOnly={true}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "24px", color: "grey" }}>{result}</p>
      </div>
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
