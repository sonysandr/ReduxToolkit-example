import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading..</div>}
      {!user.loading && user.error ? <div>Error :{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
         { user.users.map(user => (<li>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};







//Last step => To get hold  of the user state from userSlice and render appropriate jsx
// To select state from the redux store => we use the useSelector() hook
// import useSelector from 'react-redux'
// useSelector(()=>) hook takes a function as its argument ,its called a selector function.
     
    // selector function recieves the (redux state) as its argument =>  useSelector((state)=> the function then return a value)
        // state refer to the redux state which contain multiple reducers,
        // cake reducer is on of them and is refered by the key cake
            // cake : cakeReducer
            // icecream : icecreamReducer
            // user : userReducer
        // then we tap in to the numOfCakes property which we can find in the cakeSlice    
// we save the returned value to const user = useSelector(()=>) ...
