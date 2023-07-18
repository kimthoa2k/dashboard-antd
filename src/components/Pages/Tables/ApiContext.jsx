import React, { createContext, useReducer } from "react";

const ApiContext = createContext();

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_RECORD":
      return { ...state, data: [...state.data, action.payload] };
    case "UPDATE_RECORD":
      const updatedRecords = state.data.map((record) =>
        record.id === action.payload.id ? action.payload : record
      );
      return { ...state, data: updatedRecords };
    case "DELETE_RECORD":
      return {
        ...state,
        data: state.data.filter((record) => record.id !== action.payload),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
export { ApiProvider };
