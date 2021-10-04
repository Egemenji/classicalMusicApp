import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogScreen from '../screens/blog/BlogScreen';
import BlogListScreen from '../screens/blog/BlogListScreen';

const BlogStack = createNativeStackNavigator ();

const BlogStackScreen = () => {
    return (
        <>
        <BlogStack.Navigator>
            <BlogStack.Screen name="BlogScreen" component = {BlogScreen}
             options={{ headerShown: false, }}
            
            ></BlogStack.Screen>

            <BlogStack.Screen name="BlogList" component = {BlogListScreen}>            
            </BlogStack.Screen>

        </BlogStack.Navigator>
        </>
    )
}

export default BlogStackScreen
