import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './members/membersSlice.js';

export default configureStore({
  reducer: {
    members: membersReducer,
  },
});
