import { createContext, useContext, useReducer } from "react";
import { meetData } from "../constants/meetData";

export const DataContext = createContext();

const initialState = {
  meetData: meetData.meetups,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "RSVP": {
      return state.meetData.map((event) =>
        event?.id == action?.payload?.id ? { ...event, isRVPS: true } : event
      );
    }

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  //   console.log(data.meetData);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
