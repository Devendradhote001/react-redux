import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmout } from "./features/reducers/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>hello from app</h1>
      <h2>Count = {count}</h2>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmt(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>Count ++</button>
      <button onClick={() => dispatch(incrementByAmout(amt))}>
        Add by amount
      </button>
    </div>
  );
};

export default App;
