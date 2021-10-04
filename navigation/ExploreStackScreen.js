import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/explore/ExploreScreen';

const ExploreStack = createNativeStackNavigator ();

const ExploreStackScreen = () => {
    return (
        <>
        <ExploreStack.Navigator>
            <ExploreStack.Screen name='Kesfet' component={ExploreScreen}
             options={{ headerShown: false, }}
                
            ></ExploreStack.Screen>
        </ExploreStack.Navigator>
        </>
    )
}

export default ExploreStackScreen
