import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const anecdoteSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAnecdote(state, action) {
      const filter = action.payload;
      return filter;
    },
  },
});

export const { filterAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
