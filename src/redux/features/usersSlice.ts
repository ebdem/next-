import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllUser } from "@/services/getAllUsers";

export const getUsers: any = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetAllUser();
      return response.data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);

const initialState = {
  users: [] as any[],
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },

    [getUsers.fulfilled]: (state, action: any) => {
      state.users = [...action.payload.customerCollection.edges];
      state.status = "succeeded";
    },
    [getUsers.rejected]: (state: any) => {
      state.users = [];
      state.status = "failed";
    },
  },
});

export const usersReducer = usersSlice.reducer;
