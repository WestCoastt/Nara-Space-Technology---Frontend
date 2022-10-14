import { configureStore, createSlice } from "@reduxjs/toolkit";

const user_data = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addData(state, action) {
      return action.payload;
    },
    changeData(state, action) {
      const idx = state.findIndex((a) => {
        return a.name === action.payload;
      });

      if (state[idx].checked === true) {
        state[idx].checked = false;
      } else {
        state[idx].checked = true;
      }
    },
    resetData(state) {
      state.splice(0, state.length);
    },
    orderDate(state, action) {
      return action.payload;
    },
  },
});

const selected = createSlice({
  name: "selected",
  initialState: [],
  reducers: {
    selectUser(state, action) {
      return action.payload;
    },
  },
});

const filtered = createSlice({
  name: "filtered",
  initialState: "오름차 순",
  reducers: {
    filterName(state, action) {
      return action.payload;
    },
  },
});

export const { addData, changeData, resetData, orderDate } = user_data.actions;
export const { selectUser } = selected.actions;
export const { filterName } = filtered.actions;

export default configureStore({
  reducer: {
    user: user_data.reducer,
    selected: selected.reducer,
    filtered: filtered.reducer,
  },
});
