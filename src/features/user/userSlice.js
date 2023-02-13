import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [""],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''

        // action.payload is response.data
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading = false
        state.users = []
        state.error = action.error.message
    })
  },
});

export default userSlice.reducer;

// First we define the initial state which contain 3 properties
// loading to indicate the request is happening in the background
// users [ ] to  to store the array of users fetched from the api
// error to display the error if there was any

// Next we have the async login written using the createAsynThunk function
// the first argument is the action type
// the second argument is a asyn function that return a promise
// this is assigned to a const


// we export the async action thunk
// and the reducer as default
