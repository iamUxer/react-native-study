import React from 'react';
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
import { stateMembers, actionsMembers } from '../store/members/membersSlice.js';

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
  const member = { ...useSelector(stateMembers).member };
  console.log(member);
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
      <ScrollView nativeID="tbody" style={styles.tbody}>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('ModalUpdate');
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
                { text: 'OK', onPress: () => console.log('OK Pressed') },
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
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍길동</Text>
          <Text style={styles.memberAge}>39</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>김삼순</Text>
          <Text style={styles.memberAge}>33</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>홍명보</Text>
          <Text style={styles.memberAge}>44</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>박지삼</Text>
          <Text style={styles.memberAge}>22</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
        <View nativeID="member" style={styles.member}>
          <Text style={styles.memberName}>권명순</Text>
          <Text style={styles.memberAge}>10</Text>
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.memberUpdate, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable onPress={() => {}} style={styles.memberDelete}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.memberDelete, { color: '#EA4335' }]}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export function ModalCreate(props: any) {
  console.log(props.route.name);
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
          />
          <TextInput
            style={[styles.memberAge, styles.borderStyle]}
            placeholder="Age"
          />
          <Pressable onPress={() => {}} style={styles.memberUpdate}>
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
  console.log(props.route.name);
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
          />
          <TextInput
            style={[styles.memberAge, styles.borderStyle]}
            placeholder="Age"
          />
          <Pressable
            onPress={() => {}}
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
