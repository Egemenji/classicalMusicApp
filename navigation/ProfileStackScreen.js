import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profile/ProfileScreen';


const ProfileStack = createNativeStackNavigator ();

const ProfileStackScreen = () => {
    return (
        <>
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Profil' component={ProfileScreen}
             options={{ headerShown: false, }}
            
            ></ProfileStack.Screen>

        </ProfileStack.Navigator>
        </>

    )
}

export default ProfileStackScreen
