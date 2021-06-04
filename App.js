import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcon} from '@expo/vector-icons'

import Home from './screens/home'
import Profile from './screens/profile'
import Recents from './screens/recents'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      initialRoute = 'Home'
      activeColor = "#02ad94"
      inactiveColor = "#dedede"
      style = {{backgroundColor: '#000'}}
      barStyle = {{backgroundColor: '#0f0f0f', padding: 4}}
    >
      <Tab.Screen 
        name="Home"
        component={Home} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name='home' color={color} size={28}/>
          )
        }}
        />
      <Tab.Screen
         name="Profile" 
         component={Profile} 
         options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name='camera-metering-spot' color={color} size={28}/>
          )
        }}
         />
      <Tab.Screen 
        name="Recents" 
        component={Recents} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name='home' color={color} size={28}/>
          )
        }}
        />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
