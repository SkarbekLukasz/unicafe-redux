import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export const addAnecdote = (newAnecdote) => {
  const anecdoteObject = { ...newAnecdote, votes: 0 };
  return axios.post(baseUrl, anecdoteObject).then((response) => response.data);
};
