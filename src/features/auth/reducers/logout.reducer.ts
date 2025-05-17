import { createSlice, type Slice } from "@reduxjs/toolkit";

const initialState: boolean = true;

const logoutSlice: Slice<boolean> = createSlice({
  name: "logout",
  initialState,
  reducers: {
    updateLogout: (state: boolean): boolean => {
      return state;
    },
  },
});

export const { updateLogout } = logoutSlice.actions;
export default logoutSlice.reducer;
