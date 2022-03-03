import { useState } from "react";
import "./styles.css";

export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState("Total");
  return (
    <div className="App">
      <h1> Simple Addition </h1>
      <input
        value={num1}
        placeholder="Number 1"
        onChange={(e) => {
          setNum1(+e.target.value);
        }}
      ></input>
      <input
        value={num2}
        placeholder="Number 2"
        onChange={(e) => {
          setNum2(+e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setTotal(num1 + num2);
        }}
      >
        Add
      </button>
      <h1>{total}</h1>
    </div>
  );
}
