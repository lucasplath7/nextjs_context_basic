import {
  fetchAllUsers,
  createUser,
  deleteUser
} from './usersActions';
import {
  incrementCount,
  decrementCount,
} from './counterActions';

export const usersActions = {
  fetchAllUsers,
  createUser,
  deleteUser,
}

export const counterActions = {
  incrementCount,
  decrementCount,
}

export default {
  usersActions,
  counterActions,
}