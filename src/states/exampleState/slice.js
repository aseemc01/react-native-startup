/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const countInitialState = {
  count: 0,
};

const usersInitialState = {
  users: [],
  isFetchingUsers: false,
  error: null,
};

const initialState = {
  ...countInitialState,
  ...usersInitialState,
};

export default createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    fetchUsers: state => {
      state.isFetchingUsers = true;
    },
    fetchUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.isFetchingUsers = false;
    },
    fetchUserFailed: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUsers = false;
    },
  },
});
