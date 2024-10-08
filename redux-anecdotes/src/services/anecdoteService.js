import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnec = async (content) => {
  const anecdote = {
    votes: 0,
    content: content,
  };
  return (await axios.post(baseUrl, anecdote)).data;
};

const updateVotes = async (id, updatedAnec) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnec);
  return response.data;
};

export default { getAll, createAnec, updateVotes };
