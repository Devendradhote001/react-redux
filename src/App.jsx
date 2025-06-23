import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmout } from "./features/reducers/counterSlice";
import { useForm } from "react-hook-form";
import {
  currentUserAction,
  loginAction,
  registerAction,
} from "./features/actions/userAction";
import AppRouter from "./components/AppRouter";

const App = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [amt, setAmt] = useState(0);
  const count = useSelector((state) => state.counter.value);


  useEffect(() => {
    dispatch(currentUserAction());
  }, []);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
