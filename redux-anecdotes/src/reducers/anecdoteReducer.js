import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

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
      const newAnecdote = asObject(action.payload);
      state.push(newAnecdote);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addVote, createAnec, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
