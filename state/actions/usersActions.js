import axios from 'axios';

import { usersDispatch } from "../usersStore";

function fetchAllUsers() {
  usersDispatch({
    type: 'FETCH_USERS_REQUEST',
  });

  axios.get('http://localhost:3001/api/user')
    .then((resp) => {
      const usersData = resp.data.reduce((acc, user) => {
        return {
          ...acc,
          [user.id]: user,
        };
      }, {});

      usersDispatch({
        type: 'FETCH_USERS_SUCCESS',
        data: usersData,
      });
    })
    .catch((error) => {
      usersDispatch({
        type: 'FETCH_USERS_FAILURE',
        error,
      });
    });
}

function createUser(userData) {
  usersDispatch({
    type: 'CREATE_USER_REQUEST',
  });

  axios.post('http://localhost:3001/api/user', userData)
    .then((resp) => {
      usersDispatch({
        type: 'CREATE_USER_SUCCESS',
        data: {
          id: resp.data,
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email,
        }
      });
    })
    .catch((error) => {
      usersDispatch({
        type: 'CREATE_USER_FAILURE',
        error,
      });
    });
}

function deleteUser(userId) {
  usersDispatch({
    type: 'DELETE_USER_REQUEST',
  });

  axios.delete(`http://localhost:3001/api/user/${userId}`)
    .then(() => {

      usersDispatch({
        type: 'DELETE_USER_SUCCESS',
        data: { userId }, 
      });
    })
    .catch((error) => {
      usersDispatch({
        type: 'DELETE_USER_FAILURE',
        error,
      });
    });
}

export {
  fetchAllUsers,
  createUser,
  deleteUser,
}