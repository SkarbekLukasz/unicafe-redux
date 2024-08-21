import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const changedAnec = action.payload;
      return state.map((anec) =>
        anec.id === changedAnec.id ? changedAnec : anec
      );
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

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const anecdotesCreation = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdoteService.createAnec(content);
    dispatch(createAnec(newAnec));
  };
};

export const votesUpdate = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const response = await anecdoteService.updateVotes(
      updatedAnecdote.id,
      updatedAnecdote
    );
    dispatch(addVote(response));
  };
};

export default anecdotesSlice.reducer;
