import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Member } from '../store/members/membersSlice';
import { stateMembers } from '../store/members/membersSlice';
import actionsMembers from '../store/members/membersActions';
import { RefreshControl } from 'react-native';

const styles = StyleSheet.create({
  thead: {
    margin: 16,
    marginBottom: 0,
    paddingBottom: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  tbody: {
    margin: 16,
  },
  member: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberName: {
    flex: 1,
    textAlign: 'center',
  },
  memberAge: {
    flex: 1,
    textAlign: 'center',
  },
  memberUpdate: {
    flex: 1,
    textAlign: 'center',
  },
  memberDelete: {
    flex: 1,
    textAlign: 'center',
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 4,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  flex1: {
    flex: 1,
  },
});

function Tab3Screen({ navigation }: any) {
  const dispatch = useDispatch();
  // const members = JSON.parse(JSON.stringify(useSelector(stateMembers).members));
  const { members, refreshing } = useSelector(stateMembers);
  // const members = Object.assign([], useSelector(stateMembers).members);
  useEffect(() => {
    dispatch(
      actionsMembers.memberSet({
        name: '',
        age: '',
      })
    );
    dispatch(actionsMembers.membersRead());
  }, [dispatch]);

  return (
    <>
      <View nativeID="thead" style={styles.thead}>
        <View nativeID="member" style={styles.member}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>삭제</Text>
        </View>
      </View>
      <ScrollView
        nativeID="tbody"
        style={styles.tbody}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              dispatch(actionsMembers.membersRead());
            }}
          />
        }
      >
        {members.map((member: Member, index: number) => (
          <View key={index} nativeID="member" style={styles.member}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberAge}>{member.age}</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('ModalUpdate', index);
              }}
              style={styles.memberUpdate}
            >
              <FontAwesome
                name="edit"
                size={24}
                style={[styles.memberUpdate, { color: '#FBBC05' }]}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                Alert.alert('Delete member', '삭제 하시겠습니까?', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () =>
                      dispatch(actionsMembers.membersDelete(index)),
                  },
                ]);
              }}
              style={styles.memberDelete}
            >
              <FontAwesome
                name="trash"
                size={24}
                style={[styles.memberDelete, { color: '#EA4335' }]}
              />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export function ModalCreate(props: any) {
  const { navigation } = props;
  const dispatch = useDispatch();
  console.log(props.route.name);
  const member: Member = { ...useSelector(stateMembers).member };
  console.log(member);
  return (
    <>
      <View nativeID="thead" style={styles.thead}>
        <View nativeID="member" style={styles.member}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>생성</Text>
        </View>
      </View>
      <ScrollView nativeID="tbody" style={styles.tbody}>
        <View nativeID="member" style={styles.member}>
          <TextInput
            style={[styles.memberName, styles.borderStyle]}
            placeholder="Name"
            value={member.name}
            onChangeText={(text) => {
              member.name = text;
              dispatch(actionsMembers.memberSet(member));
            }}
          />
          <TextInput
            style={[styles.memberAge, styles.borderStyle]}
            placeholder="Age"
            value={String(member.age)}
            keyboardType="number-pad"
            onChangeText={(text) => {
              member.age = Number(text);
              dispatch(actionsMembers.memberSet(member));
            }}
          />
          <Pressable
            onPress={() => {
              dispatch(actionsMembers.membersCreate({ member, navigation }));
            }}
            style={styles.memberUpdate}
          >
            <FontAwesome
              name="pencil"
              size={24}
              style={[styles.memberUpdate, { color: '#4285F4', padding: 8 }]}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export function ModalUpdate(props: any) {
  const dispatch = useDispatch();
  const { navigation } = props;
  const index: number = props.route.params;
  const members = JSON.parse(JSON.stringify(useSelector(stateMembers).members));
  const member = members[index];
  console.log(props.route.name, props);
  return (
    <>
      <View nativeID="thead" style={styles.thead}>
        <View nativeID="member" style={styles.member}>
          <Text style={[styles.flex1, styles.textAlignCenter]}>이름</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>나이</Text>
          <Text style={[styles.flex1, styles.textAlignCenter]}>수정</Text>
        </View>
      </View>
      <ScrollView nativeID="tbody" style={styles.tbody}>
        <View nativeID="member" style={styles.member}>
          <TextInput
            style={[styles.memberName, styles.borderStyle]}
            placeholder="Name"
            value={member.name}
            onChangeText={(text) => {
              member.name = text;
              dispatch(actionsMembers.membersSet(members));
            }}
          />
          <TextInput
            style={[styles.memberAge, styles.borderStyle]}
            placeholder="Age"
            value={String(member.age)}
            keyboardType="number-pad"
            onChangeText={(text) => {
              member.age = text;
              dispatch(actionsMembers.membersSet(members));
            }}
          />
          <Pressable
            onPress={() => {
              dispatch(
                actionsMembers.membersUpdate({ index, member, navigation })
              );
            }}
            style={[
              styles.memberUpdate,
              { alignItems: 'center', justifyContent: 'center' },
            ]}
          >
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05', padding: 8 }]}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export default Tab3Screen;
