import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
         // ordered here is specified as a key , now this is a function that recieves state and action.
        // with RTK we don't have to explicitly return the new state.
        // We can directly mutate this state becoz createSlice uses Immer library.
        // createSlice will automatically generate action creators with the same name as reducer functions=> ordered, restocked.
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
// For the named exports we have to destructure the actions and export them
export const { ordered, restocked } = cakeSlice.actions;
