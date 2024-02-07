import { createContext, useReducer } from "react";
const initialState = {
  count: 0,
};

const counterStore = createContext(initialState);
const { Provider } = counterStore;
let counterDispatch;

const CounterStateProvider = ({ children }) => {
  const [counterState, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT_COUNT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT_COUNT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        throw new Error();
    }
  }, initialState);
  counterDispatch = dispatch;
  return <Provider value={{ counterState, dispatch }}>{children}</Provider>;
};
export { counterStore, CounterStateProvider, counterDispatch };