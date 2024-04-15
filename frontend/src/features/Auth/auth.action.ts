import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginType, logoutType, signinType } from "./auth.type";

interface signup {
  email: string;
  password: string;
  name: string;
  role: string;
}

interface login {
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  signinType,
  async (data: signup, { rejectWithValue }) => {
    try {
      console.log("signInUser", data);
      const res = await axios.post(`http://localhost:8081/signup`, data);
      const output = res.data;
      console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  loginType,
  async (data: login, { rejectWithValue }) => {
    try {
      //console.log("signInUser", data)
      const res = await axios.post(`http://localhost:8081/login`, data);
      const output = res.data;
      //console.log("response of data", res.data.token)
      localStorage.setItem("logged", "true");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("userid", res.data.user._id);
      return output;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(logoutType, async () => {
  try {
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
  } catch (error: any) {
    return error.message;
  }
});
