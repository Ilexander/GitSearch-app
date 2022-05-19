import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userRepos: any;
  userData: any;
  status: string;
}

export const fetchUser = createAsyncThunk<UserState, string>(
  "users/gitUser",
  async function (name, { rejectWithValue }) {
    const responsive = await fetch(`https://api.github.com/users/${name}`);
    if (!responsive.ok) {
      return rejectWithValue("Error");
    }

    const data = responsive.json();
    return data;
  }
);

const initialState: UserState = {
  userData: [],
  userRepos: [],
  status: "watinig",
};

export const fetchUserSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    getCurrentRepos(state, action: PayloadAction<string | number>) {
      state.userRepos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<UserState>) => {
        state.status = "fulfilled";
        state.userData = action.payload;
      }
    );
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentRepos } = fetchUserSlice.actions;

export default fetchUserSlice.reducer;
