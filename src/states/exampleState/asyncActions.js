import axios from 'axios';

import slice from './slice';

const { actions } = slice;
const { fetchUsers, fetchUserFailed, fetchUsersSuccess } = actions;

const fetchRemoteUsers = () => async dispatch => {
  dispatch(fetchUsers());

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    dispatch(fetchUsersSuccess(response.data));
  } catch (e) {
    dispatch(fetchUserFailed(e.message));
  }
};

export default { fetchRemoteUsers };
