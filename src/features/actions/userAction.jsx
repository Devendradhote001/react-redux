import { axiosInstance } from "../../axiosInstance";
import axios from "axios";
import { setUser } from "../reducers/userSlice";

export const registerAction = (user) => async () => {
  try {
    let res = await axios.post("http://localhost:3000/users", user);
    console.log("api res from reg action->", res);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginAction = (user) => {
  return async (dispath, state) => {
    try {
      let res = await axiosInstance.get(
        `/users?email=${user.email}&password=${user.password}`
      );
      localStorage.setItem("user", JSON.stringify(res.data[0]));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const currentUserAction = () => async (dispatch) => {
  try {
    let storeData = JSON.parse(localStorage.getItem("user"));
    if (storeData) {
      dispatch(setUser(storeData));
    }
  } catch (error) {
    console.log(error.message);
  }
};
