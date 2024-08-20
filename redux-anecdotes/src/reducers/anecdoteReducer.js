import { createSlice } from "@reduxjs/toolkit";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((anec) => anec.id === id);
      const changedAnec = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anec) => (anec.id === id ? changedAnec : anec));
    },
    createAnec(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addVote, createAnec, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
