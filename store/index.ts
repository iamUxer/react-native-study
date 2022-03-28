import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './members/membersSlice';

export default configureStore({
  reducer: {
    members: membersReducer,
  },
});
