import { configureStore } from "@reduxjs/toolkit";
// We need to import all the reducers
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// configureStore() accepts {}as an argument => configureStore({ })
// inside { } => we can specify a key called reducer => reducer : { }
// then inside { } => then we specify all the reducers from slices that belong to features
// To do the above step we add a key in the reducer object and set it to imported reducer
 const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

// we default export the store to be used in index.js
export default store



// Similar to Redux
// The above process of giving a key and setting the reducer to it is similar to what we used in redux
// In Redux we used combineReducer() method there to assign the various reducers to a constant rootReducer

 
