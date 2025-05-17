import { createSlice, type Slice } from "@reduxjs/toolkit";
import {
  type AuthState,
  type IReduxAuthPayload,
} from "../interfaces/auth.interface";

const initialState: AuthState = {};

const authSlice: Slice<AuthState> = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthUser: (state: AuthState, action: IReduxAuthPayload): AuthState => {
      const { authInfo } = action.payload;
      return {
        ...state,
        ...authInfo,
      };
    },
    clearAuthUser: (): AuthState => {
      return initialState;
    },
  },
});

export const { addAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
