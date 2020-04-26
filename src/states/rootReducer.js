import { combineReducers } from '@reduxjs/toolkit';

import exampleSlice from './exampleState/slice';

export default combineReducers({
  example: exampleSlice.reducer,
});
