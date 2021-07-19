import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AppScreen from '../components/AppScreen'
import AppCard from '../components/AppCard'
import colors from '../config/colors'

const listing = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 300,
        image: require('../assets/couch.jpg') 
    }
]

const ListingScreen = () => {
    return (
        <AppScreen style={styles.screen}>
            <FlatList 
                data={listing}
                keyExtractor={ item => item.id.toString()}
                renderItem={ ({item}) => 
                <AppCard 
                    title={item.title}
                    subtitle={"$" + item.price}
                    image={item.image}
                />
            }
            />
        </AppScreen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
