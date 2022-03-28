import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Tab1Screen, { Tab1Detail } from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen, { ModalCreate, ModalUpdate } from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';
import Modal1Screen from './screens/Modal';
import { Pressable } from 'react-native';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1">
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Title1',
          tabBarLabel: 'TabBarLabel1',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="code" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Title2',
          tabBarLabel: 'TabBarLabel2',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="code" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={({ navigation }) => ({
          title: 'Title3',
          tabBarLabel: 'TabBarLabel3',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="code" size={30} />,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('ModalCreate')}>
              <FontAwesome
                name="pencil"
                size={24}
                style={{ marginRight: 24, color: '#4285F4' }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          title: 'Title4',
          tabBarLabel: 'TabBarLabel4',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="code" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Tab5"
        component={Tab5Screen}
        options={{
          title: 'Title5',
          tabBarLabel: 'TabBarLabel5',
          headerTitleAlign: 'center',
          tabBarIcon: () => <FontAwesome name="code" size={30} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tab1Detail" component={Tab1Detail} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="Modal1"
            component={Modal1Screen}
            options={({ navigation }) => ({
              headerLeft: () => <></>,
              headerRight: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <FontAwesome name="close" size={25} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ModalCreate"
            component={ModalCreate}
            options={({ navigation }) => ({
              headerLeft: () => <></>,
              headerRight: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <FontAwesome name="close" size={25} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ModalUpdate"
            component={ModalUpdate}
            options={({ navigation }) => ({
              headerLeft: () => <></>,
              headerRight: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <FontAwesome name="close" size={25} />
                </Pressable>
              ),
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
