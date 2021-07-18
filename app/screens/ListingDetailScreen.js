import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingDetailScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >Red Jacket for sale</AppText>
                <AppText style={styles.price} >100$</AppText>
            <View style={styles.userContainer}>
            <ListItem 
                title='Mosh Hamedani'
                subtitle='5 listings'
                image={require('../assets/mosh.jpg')}
            />
            </View>
            </View>
        </View>
    )
}

export default ListingDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
})
