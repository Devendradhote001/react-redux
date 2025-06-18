import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmout } from "./features/reducers/counterSlice";
import { useForm } from "react-hook-form";
import {
  currentUserAction,
  loginAction,
  registerAction,
} from "./features/actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [amt, setAmt] = useState(0);
  const count = useSelector((state) => state.counter.value);

  new Promise((resolve, reject) => {});

  const formSubmit = (data) => {
    dispatch(loginAction(data));
    reset();
    alert("user logged in");
  };

  useEffect(() => {
    dispatch(currentUserAction());
  }, []);

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

      <form onSubmit={handleSubmit(formSubmit)} action="">
        {/* <input type="text" placeholder="username" {...register("name")} /> */}
        <input type="email" placeholder="email" {...register("email")} />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
