import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodayScreen from '../screens/today/TodayScreen';

const TodayStack = createNativeStackNavigator();
 
const TodayStackScreen = () => {
    return (
        // View içerisine buttonları list item map te dön
        <>
        <TodayStack.Navigator>
            <TodayStack.Screen name='Today' component={TodayScreen}
             options={{ headerShown: false, }}

            ></TodayStack.Screen>
            
        </TodayStack.Navigator>
        </>
    )
}

export default TodayStackScreen
