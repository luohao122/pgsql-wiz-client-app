import { createSlice, type Slice } from "@reduxjs/toolkit";

interface IReduxCollections {
  type: string;
  payload: string[];
}

const initialState: string[] = [];

const collectionSlice: Slice<string[]> = createSlice({
  name: "collections",
  initialState,
  reducers: {
    addCollections: (_: string[], action: IReduxCollections): string[] => {
      const newPayload: string[] = [...action.payload];
      const uniq = [...new Set(newPayload)];
      return uniq;
    },
    clearCollections: (): string[] => {
      return initialState;
    },
  },
});

export const { addCollections, clearCollections } = collectionSlice.actions;
export default collectionSlice.reducer;
