import { createSlice } from '@reduxjs/toolkit';

// Members, Member 타입 생성
export declare interface Member {
  name: string;
  age: string | number;
}
export declare interface MembersState {
  members: Array<Member>;
  member: Member;
}

const membersState: MembersState = {
  members: [],
  member: {
    name: '',
    age: '',
  },
};

export declare interface MembersResult {
  result: string;
}

export const membersSlice = createSlice({
  name: 'members',
  initialState: membersState,
  reducers: {
    memberSet: (state, action) => {
      state.member = action.payload;
    },
    membersCreate: (state, action) => {
      state.members.push(action.payload);
      console.log('membersCreate', state.members);
    },
    membersRead: (state) => {
      state.members.push(
        {
          name: '홍길동',
          age: 20,
        },
        {
          name: '춘향이',
          age: 16,
        }
      );
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
