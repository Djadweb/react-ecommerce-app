import React, { createContext, useContext, useReducer } from 'react';
//CREATED THE DATA LAYER
export const StateContext = createContext();

//CREATED THE PROVIDER COMPONENT THAT SET ALL WHAT I'LL PROVIDE
export const StateProvider = ({ reducer, initialState, children }) => (
    //I PROVIDE DATA HERE
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//CREATE A USABLE COMPONENT TO USE OUR CONTEXT API
export const useStateValue = () => useContext(StateContext);