import { createSlice, type Slice } from "@reduxjs/toolkit";

interface IReduxDocuments {
  type: string;
  payload: Array<Record<string, unknown>>;
}

const initialState: Array<Record<string, unknown>> = [];

const documentsSlice: Slice<Array<Record<string, unknown>>> = createSlice({
  name: "documents",
  initialState,
  reducers: {
    addDocuments: (
      _: Array<Record<string, unknown>>,
      action: IReduxDocuments
    ): Array<Record<string, unknown>> => {
      return action.payload;
    },
    clearDocuments: (): Array<Record<string, unknown>> => {
      return initialState;
    },
  },
});

export const { addDocuments, clearDocuments } = documentsSlice.actions;
export default documentsSlice.reducer;
