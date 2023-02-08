//Setting up React Context API---helps us make application level states and we can get the data fromthose states through any component.
import React, {createContext, useContext, useReducer} from "react"

//Prepares the data layer
export const stateContext = createContext();
//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children}) =>(
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);
//Pull informationfromthe data layer
export const useStateValue = () => useContext(stateContext)