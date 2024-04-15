import { createSlice } from "@reduxjs/toolkit";
import { createquestion, getQueById, getQueTest } from "./question.action";

const initialState = {
  isLoading: false,
  error: null,
  question: null,
  success: false,
  allquestions: [],
  quebyid: null,
  number: 0,
};

export const questionSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    toggleSuccess: (state) => {
      state.success = false;
    },
    toggleQuestionNo: (state, action) => {
      if (action.payload === 0) state.number = 0;
      state.number = state.number + action.payload;
      console.log("object");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createquestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createquestion.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.question = action.payload;
        //console.log('action.payload: ', action.payload);
        state.allquestions = [...state.allquestions, action.payload];
        state.success = true;
      })
      .addCase(createquestion.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getQueTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQueTest.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.allquestions = action.payload;
        state.success = true;
      })
      .addCase(getQueTest.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getQueById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQueById.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.quebyid = action.payload;
        state.success = true;
      })
      .addCase(getQueById.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleSuccess, toggleQuestionNo } = questionSlice.actions;
export default questionSlice.reducer;
