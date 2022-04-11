import { createSlice } from '@reduxjs/toolkit';

// Members, Member 타입 생성
export declare interface Member {
  name: string;
  age: string | number;
}
export declare interface MembersState {
  members: Array<Member>;
  member: Member;
  refreshing: boolean;
}

const membersState: MembersState = {
  members: [],
  member: {
    name: '',
    age: '',
  },
  refreshing: false,
};

export declare interface MembersResult {
  result: string;
}

export declare interface MembersResultRead extends MembersResult {
  members: Array<Member>;
}

export const membersSlice = createSlice({
  name: 'members',
  initialState: membersState,
  reducers: {
    memberSet: (state, action) => {
      state.member = action.payload;
    },
    membersRefreshing: (state, action) => {
      state.refreshing = action.payload;
    },
    membersCreate: (state, action) => {
      state.members.push(action.payload);
      console.log('membersCreate', state.members);
    },
    membersRead: (state, action) => {
      state.members = action.payload;
    },
    membersDelete(state, action) {
      state.members.splice(action.payload, 1);
    },
    membersSet: (state, action) => {
      state.members = action.payload;
    },
    membersUpdate: (state, action) => {
      state.members[action.payload.index] = action.payload.member;
    },
  },
});

export const stateMembers = (state: { members: MembersState }) => state.members;
export const actionsMembers = membersSlice.actions;

export default membersSlice.reducer;

// class _Member {
//   members: Array<Member> = [];
//   member: Member = {
//     name: '',
//     age: ''
//   };
// }
