import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Tab1Screen() {
  return (
    <View>
      <Text>스크린1</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View>
      <Text>스크린2</Text>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1">
      <BottomTab.Screen name="Tab1" component={Tab1Screen} />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Title2',
          tabBarLabel: 'TabBarLabel2',
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
