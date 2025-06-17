import { axiosInstance } from "../../axiosInstance";

export const registerAction = (user) => async (dispatch) => {
  try {
    let res = await axiosInstance.post("/users", user);
    console.log("api res from reg action->", res);
  } catch (error) {
    console.log(error.message);
  }
};
