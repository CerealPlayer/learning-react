import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {isAuth: false},
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  }
})

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
