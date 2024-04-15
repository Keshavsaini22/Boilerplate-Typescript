import { createSlice } from "@reduxjs/toolkit";
import {
  createTest,
  getTestbyTestId,
  getTestbyUser,
  getallTests,
} from "./test.action";

const initialState = {
  isLoading: false,
  error: null,
  test: null,
  success: false,
  alltests: [],
  testbyid: null,
  useralltests: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    toggleSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTest.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.test = action.payload;
        //console.log('action.payload: ', action.payload);
        state.alltests = [action.payload, ...state.alltests];
        state.success = true;
      })
      .addCase(createTest.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTestbyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestbyUser.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.alltests = action.payload;
      })
      .addCase(getTestbyUser.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getallTests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getallTests.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.useralltests = action.payload;
      })
      .addCase(getallTests.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTestbyTestId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestbyTestId.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.testbyid = action.payload;
      })
      .addCase(getTestbyTestId.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleSuccess } = testSlice.actions;
export default testSlice.reducer;
