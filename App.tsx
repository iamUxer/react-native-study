import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';

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
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Title2',
          tabBarLabel: 'TabBarLabel2',
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          title: 'Title3',
          tabBarLabel: 'TabBarLabel3',
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          title: 'Title4',
          tabBarLabel: 'TabBarLabel4',
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Tab5"
        component={Tab5Screen}
        options={{
          title: 'Title5',
          tabBarLabel: 'TabBarLabel5',
          headerTitleAlign: 'center',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
