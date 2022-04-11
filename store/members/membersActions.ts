import axios, { AxiosResponse } from 'axios';
import { axiosError } from '../common';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsMembers } from './membersSlice';
import { MembersResult } from './membersSlice';

export const memberSet = createAction('memberSet', (payload) => {
  return { payload: payload };
});
export const membersSet = createAction('membersSet', (payload) => {
  return { payload: payload };
});
export const membersCreate = createAction('membersCreate', (payload) => {
  return { payload: payload };
});
export const membersRead = createAction('membersRead', () => {
  return { payload: null };
});
export const membersUpdate = createAction('membersUpdate', (payload) => {
  return { payload: payload };
});
export const membersDelete = createAction('membersDelete', (payload) => {
  return { payload: payload };
});

export function* takeEveryMembers() {
  yield takeEvery(memberSet, function* (action) {
    yield put(actionsMembers.memberSet(action.payload));
  });

  yield takeEvery(membersSet, function* (action) {
    yield put(actionsMembers.membersSet(action.payload));
  });

  yield takeEvery(membersCreate, function* (action) {
    const { navigation, member } = action.payload;
    try {
      const response: AxiosResponse<MembersResult> = yield call(() =>
        axios.post('http://localhost:3100/api/v1/members', member)
      );
      console.log('Done membersCreate', response);
      yield membersRead$();
      alert('Created');
      navigation.goBack();
    } catch (error: any) {
      axiosError(error);
    }
  });

  const membersRead$ = function* () {
    yield put(actionsMembers.membersRead());
  };
  yield takeEvery(membersRead, membersRead$);

  yield takeEvery(membersUpdate, function* (action) {
    yield put(actionsMembers.membersUpdate(action.payload));
  });

  yield takeEvery(membersDelete, function* (action) {
    yield put(actionsMembers.membersDelete(action.payload));
  });
}

const actions = {
  memberSet,
  membersSet,
  membersCreate,
  membersRead,
  membersUpdate,
  membersDelete,
};

export default actions;
