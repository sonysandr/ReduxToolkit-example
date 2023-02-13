import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered,restocked } from "./cakeSlice";

export const CakeView = () => {
  
  const [value,setValue] = useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of Cakes = {numOfCakes}</h1>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value))}  />
      <button onClick={()=> dispatch(restocked(value))}>Restock Cake</button>
    </div>
  );
};

// we need to connect these elements with the redux store
// To read data from the redux store  into a react component we use the useSelector() hook
// Steps to do that

// import the useSelector hook from react-redux package
// within the component call useSelector()

// useSelector(()=>) hook takes a function as its argument ,its called a selector function.
    // selector function recieves the redux state as its argument =>  unSelector((state)=> the function then return a value)
        // state refer to the redux state which contain multiple reducers,
        // cake reducer is on of them and is refered by the key cake
            // cake : cakeReducer
            // icecream : icecreamReducer
            // user : userReducer
        // then we tap in to the numOfCakes property which we can find in the cakeSlice.js    
// we save the returned value to const numOfCakes = useSelector(()=>) ...

// useSelector hook basically returns what is returned by the selector function

// The value of the input element does not have to be part of the redux store , 
// If something is not needed outside a component, it can stay as a local state
// No need to unnecessarily compilicate the redux store
