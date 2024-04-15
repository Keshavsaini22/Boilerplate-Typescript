import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/auth.slice";
import testSlice from "../features/Test/test.slice";
import questionSlice from "../features/Question/question.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    test: testSlice,
    quest:questionSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
