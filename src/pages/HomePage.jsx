import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/reducers/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-white">HOME</h1>
      <button
        onClick={() => dispatch(removeUser())}
        className="p-5 bg-blue-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
