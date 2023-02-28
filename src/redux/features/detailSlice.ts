import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetSingleUser } from "@/services/getSingleUser";
import { DetailState } from "../types";

export const getDetail: any = createAsyncThunk(
  "getDetail",
  async (param: any, { rejectWithValue }) => {
    try {
      const response = await GetSingleUser(param);
      return response.data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);

const initialState: DetailState = {
  detail: {},
  status: "idle",
  customer: {},
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.status = "loading";
    },

    [getDetail.fulfilled]: (state, action: PayloadAction<DetailState>) => {
      state.detail = { ...action.payload.customer };
      state.status = "succeeded";
    },
    [getDetail.rejected]: (state: any) => {
      state.detail = {};
      state.status = "failed";
    },
  },
});

export const detailsReducer = detailSlice.reducer;
