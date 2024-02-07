import { createContext, useReducer } from "react";
const initialState = {
  fetching: false,
  deleting: false,
  creating: false,
  error: null,
  selectedUserId: null,
  users: null,
};

const usersStore = createContext(initialState);
const { Provider } = usersStore;
let usersDispatch;

const UsersStateProvider = ({ children }) => {
  const [usersState, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        return {
          ...state,
          fetching: true,
        };
      case "FETCH_USERS_SUCCESS":
        return {
          ...state,
          users: action.data,
          fetching: false,
        };
      case "FETCH_USERS_FAILURE":
        return {
          ...state,
          fetching: false,
          error: action.error,
        };
      case "CREATE_USER_REQUEST":
        return {
          ...state,
          creating: true,
        };
      case "CREATE_USER_SUCCESS":
        return {
          ...state,
          users: {
            ...state.users,
            [action.data.id]: action.data,
          },
          creating: false,
        };
      case "CREATE_USER_FAILURE":
        return {
          ...state,
          creating: false,
          error: action.error,
        };
      case "DELETE_USER_REQUEST":
        return {
          ...state,
          deleting: true,
        };
      case "DELETE_USER_SUCCESS":
        const { [action.data.userId]: deletedUser, ...restOfUsers } = state.users;

        return {
          ...state,
          users: { ...restOfUsers },
          deleting: false,
        };
      case "DELETE_USER_FAILURE":
        return {
          ...state,
          deleting: false,
          error: action.error,
        };
      default:
        throw new Error();
    }
  }, initialState);
  usersDispatch = dispatch;
  return <Provider value={{ usersState, dispatch }}>{children}</Provider>;
};
export { usersStore, UsersStateProvider, usersDispatch };