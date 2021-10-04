import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import TodayStackScreen from './navigation/TodayStackScreen';
import ExploreStackScreen from './navigation/ExploreStackScreen';
import MusicStackScreen from './navigation/MusicStackScreen';
import BlogStackScreen from './navigation/BlogStackScreen';
import ProfileStackScreen from './navigation/ProfileStackScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name='Today' component={TodayStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}></Tab.Screen>
        <Tab.Screen name='Explore' component={ExploreStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="meditation" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>
        <Tab.Screen name='Music' component={MusicStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="headset" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>
        <Tab.Screen name='Blog' component={BlogStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-edit" color={color} size={26} />
          ),
          headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1B7F9F',},
        }}
        ></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;