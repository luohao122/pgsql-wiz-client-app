import { createSlice, type Slice } from "@reduxjs/toolkit";
import { type ISQLPayload } from "../../../shared/interfaces/app.interface";

interface IReduxSQL {
  type: string;
  payload: string;
}

const initialState: ISQLPayload = {
  promptQuery: "",
  sqlQuery: "",
};

const sqlSlice: Slice<ISQLPayload> = createSlice({
  name: "sqlQuery",
  initialState,
  reducers: {
    addSQLQuery: (state: ISQLPayload, action: IReduxSQL): ISQLPayload => {
      return {
        ...state,
        sqlQuery: action.payload,
      };
    },
    addPromptSQLQuery: (state: ISQLPayload, action: IReduxSQL): ISQLPayload => {
      return {
        ...state,
        promptQuery: action.payload,
      };
    },
    clearSQLQuery: (state: ISQLPayload): ISQLPayload => {
      return {
        ...state,
        sqlQuery: "",
      };
    },
    clearPromptSQLQuery: (state: ISQLPayload): ISQLPayload => {
      return {
        ...state,
        promptQuery: "",
      };
    },
  },
});

export const {
  addSQLQuery,
  addPromptSQLQuery,
  clearSQLQuery,
  clearPromptSQLQuery,
} = sqlSlice.actions;

export default sqlSlice.reducer;
