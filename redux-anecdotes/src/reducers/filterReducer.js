const reducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_ANEC":
      return action.payload.filter;
    default:
      return state;
  }
};

export const filterAction = (filter) => {
  return {
    type: "FILTER_ANEC",
    payload: { filter },
  };
};

export default reducer;
