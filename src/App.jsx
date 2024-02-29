import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  Clear,
  incrementByAmt,
} from "./Store/Slices/counterslice";
import { useState } from "react";
function App() {
  const [value, setValue] = useState();
  const amount = Number(value) || 0;
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  return (
    <>
      <h1 >{count}</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <button onClick={() => dispatch(Clear())}>reset</button>
        <input
          style={{ borderRadius: "8px", border: "none", padding: "5px" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Amount"
        />
        <button onClick={() => dispatch(incrementByAmt(amount))}>
          incrementByAmt
        </button>
      </div>
    </>
  );
}

export default App;
