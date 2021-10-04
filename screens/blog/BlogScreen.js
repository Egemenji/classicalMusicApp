import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { blog } from '../../data/blogData'

const BlogScreen = ({navigation}) => {

    return(
        <>
          <ScrollView style={{backgroundColor:'blue'}}>
            <TouchableOpacity>  
            {
                blog.map((l, i) => (
                <ListItem key={i} bottomDivider onPress = {() => navigation.navigate('BlogList',{id:l.id})}>
                    <Avatar source={{uri: l.img}} />
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.category}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
            </TouchableOpacity>
         </ScrollView>


       </> 
       )
     }


export default BlogScreen


