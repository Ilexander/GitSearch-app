import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatusState {
  data: any;
  repos: any;
  status: string;
  error: boolean;
}

export const fetchUsers = createAsyncThunk<StatusState, string>(
  "users/gitUsers",
  async function (name, { rejectWithValue }) {
    const responsive = await fetch(
      `https://api.github.com/search/users?q=${name}&per_page=5`
    );
    if (!responsive.ok) {
      return rejectWithValue("Error");
    }

    const data = responsive.json();
    return data;
  }
);

export const fetchRepos = createAsyncThunk<StatusState, string>(
  "users/fetchRepos",
  async function (name, { rejectWithValue }) {
    const responsive = await fetch(name);
    if (!responsive.ok) {
      return rejectWithValue("Error");
    }
    const data = responsive.json();
    return data;
  }
);

const initialState: StatusState = {
  data: [],
  repos: [],
  status: "waiting",
  error: false,
};

export const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    clearRepos(state) {
      state.repos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "pending";
      state.error = false;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<StatusState>) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = false;
      }
    );
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "fulfilled";
      state.error = true;
    });
    builder.addCase(
      fetchRepos.fulfilled,
      (state, action: PayloadAction<StatusState>) => {
        state.status = "fulfilled";
        state.repos.push(action.payload);
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { clearRepos } = fetchSlice.actions;

export default fetchSlice.reducer;
