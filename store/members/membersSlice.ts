import { createSlice } from '@reduxjs/toolkit';

// Members, Member 타입 생성
export declare interface Member {
  name: string;
  age: string;
}
export declare interface MembersState {
  members: Array<Member>;
  member: Member;
}

const membersState: MembersState = {
  members: [
    {
      name: '',
      age: '',
    },
    {
      name: '',
      age: '',
    },
  ],
  member: {
    name: '',
    age: '',
  },
};

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
