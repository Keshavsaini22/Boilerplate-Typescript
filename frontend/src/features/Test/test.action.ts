import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getalltestType,
  testcreateType,
  testgetbyTestType,
  testgetbyUserType,
} from "./test.type";

export const createTest = createAsyncThunk(
  testcreateType,
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(`http://localhost:8081/test`, data, config);
      const output = res.data;
      // console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getTestbyUser = createAsyncThunk(
  testgetbyUserType,
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`http://localhost:8081/test`, config);
      const output = res.data;
      // console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getallTests = createAsyncThunk(
  getalltestType,
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:8081/tests`);
      const output = res.data;
      console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getTestbyTestId = createAsyncThunk(
  testgetbyTestType,
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        `http://localhost:8081/test/id&testId=${data}`,
        config
      );
      const output = res.data;
      // console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);
