import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  questionGetByIdType,
  questionGetByTestType,
  questioncreateType,
} from "./question.type";

export const createquestion = createAsyncThunk(
  questioncreateType,
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        `http://localhost:8081/question`,
        data,
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

export const getQueTest = createAsyncThunk(
  questionGetByTestType,
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        `http://localhost:8081/question/text/${data}`,
        // &testId=${data}
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

export const getQueById = createAsyncThunk(
  questionGetByIdType,
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        `http://localhost:8081/question/&queId=${data}`,
        config
      );
      const output = res.data;
      console.log("response of data", res);
      return output;
    } catch (error: any) {
      console.log("error: ", error.response.data);
      return rejectWithValue(error.response.data.message);
    }
  }
);
