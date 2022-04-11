import axios, { AxiosResponse } from 'axios';
import { axiosError } from '../common';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { actionsMembers } from './membersSlice';
import { MembersResult, MembersResultRead } from './membersSlice';

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
        axios.post('http://192.168.219.103:3100/api/v1/members', member)
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
    try {
      yield put(actionsMembers.membersRefreshing(true));
      const response: AxiosResponse<MembersResultRead> = yield call(() =>
        axios.get('http://192.168.219.103:3100/api/v1/members')
      );
      console.log('Done membersRead', response.data.members);
      yield put(actionsMembers.membersRead(response.data.members));
      yield put(actionsMembers.membersRefreshing(false));
    } catch (error: any) {
      axiosError(error);
      yield put(actionsMembers.membersRefreshing(false));
    }
  };
  yield takeEvery(membersRead, membersRead$);

  yield takeEvery(membersUpdate, function* (action) {
    const { navigation, member, index } = action.payload;
    try {
      const response: AxiosResponse<MembersResult> = yield call(() =>
        axios.patch(
          'http://192.168.219.103:3100/api/v1/members/' + index,
          member
        )
      );
      console.log('Done membersUpdate', response);
      yield membersRead$();
      alert('Updated');
      navigation.goBack();
    } catch (error: any) {
      axiosError(error);
    }
  });

  yield takeEvery(membersDelete, function* (action) {
    try {
      const response: AxiosResponse<MembersResult> = yield call(() =>
        axios.delete(
          'http://192.168.219.103:3100/api/v1/members/' + action.payload
        )
      );
      console.log('Done membersUpdate', response);
      yield membersRead$();
    } catch (error: any) {
      axiosError(error);
    }
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
