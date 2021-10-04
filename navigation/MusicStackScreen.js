import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicScreen from '../screens/music/MusicScreen';
import ArtistsDetailScreen from '../screens/music/ArtistsDetailScreen';

const MusicStack = createNativeStackNavigator();

const MusicStackScreen = () => {
    return (
        <MusicStack.Navigator>
            <MusicStack.Screen name="Musics" component={MusicScreen} 
             options={{ headerShown: false, }}
              ></MusicStack.Screen>

            <MusicStack.Screen name="ArtistDetail" component={ArtistsDetailScreen}
             options={{ headerShown: true, }} 
             ></MusicStack.Screen>
        </MusicStack.Navigator>
    )
}

export default MusicStackScreen
