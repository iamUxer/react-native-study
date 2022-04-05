import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import membersReducer from './members/membersSlice';
import { takeEveryMembers } from './members/membersActions';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    members: membersReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(function* () {
  yield all([takeEveryMembers()]);
});
