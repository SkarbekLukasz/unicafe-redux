import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return "";
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;

export const manageNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => dispatch(removeNotification()), timeout * 1000);
  };
};

export default notificationSlice.reducer;
