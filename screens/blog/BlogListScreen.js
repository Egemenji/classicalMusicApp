import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { blog } from '../../data/blogData'


const BlogListScreen = ({navigation, route}) => {

    let blogId = route.params.id;
    let blogModel = blog.find(q => q.id == blogId);

    console.log('Blog list screen');

    return (

        <>
            <Card>
                <Card.Title>{blogModel.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: blogModel.img }}>
                </Card.Image>
                <Text style={{marginTop:20}}>{blogModel.desription}</Text>
            </Card>
        </>

    )
}

export default BlogListScreen
