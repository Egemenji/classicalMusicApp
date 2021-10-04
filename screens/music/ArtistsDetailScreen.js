import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { artists } from '../../data/artistsData'


const ArtistsDetailScreen = ({navigation, route}) => {

    let artistId = route.params.id;
    let artistModel = artists.find(q => q.id == artistId);

    console.log('Artist detail screen');

    return (

        <>
            <Card>
                <Card.Title>{artistModel.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: artistModel.img }}>
                </Card.Image>
                <Text style={{marginTop:20}}>{artistModel.desription}</Text>
            </Card>
        </>

    )
}

export default ArtistsDetailScreen
