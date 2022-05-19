import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchSlice";
import fetchUser from "./fetchUserSlice";
import windowSlice from "./currentWindowSlice";

export const store = configureStore({
  reducer: {
    data: fetchSlice,
    user: fetchUser,
    window: windowSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
