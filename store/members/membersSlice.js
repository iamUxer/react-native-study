import { createSlice } from '@reduxjs/toolkit';

export const membersSlice = createSlice({
  name: 'members',
  initialState: {
    members: [],
    member: {
      name: '',
      age: '',
    },
  },
  reducers: {},
});

export const stateMembers = (state) => state.members;
export const actionsMembers = membersSlice.actions;

export default membersSlice.reducer;
