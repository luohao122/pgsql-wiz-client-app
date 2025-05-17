import { createSlice, type Slice } from "@reduxjs/toolkit";

import {
  type IAppDataSource,
  type IReduxDataSource,
} from "../interfaces/datasource.interface";

const initialState: IAppDataSource = {
  active: null,
  database: "",
  dataSource: [],
};

const datasourceSlice: Slice<IAppDataSource> = createSlice({
  name: "datasource",
  initialState,
  reducers: {
    addDataSource: (
      state: IAppDataSource,
      action: IReduxDataSource
    ): IAppDataSource => {
      const newDatasource = {
        active: action.payload.active,
        database: action.payload.database,
        dataSource: action.payload.dataSource,
      };

      return {
        ...state,
        ...newDatasource,
      };
    },
    clearDataSource: (): IAppDataSource => {
      return initialState;
    },
  },
});

export const { addDataSource, clearDataSource } = datasourceSlice.actions;
export default datasourceSlice.reducer;
