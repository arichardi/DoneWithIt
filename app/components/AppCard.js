import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors'

import AppText from './AppText'

export default function AppCard({image, title, subtitle, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >{title}</AppText>
                <AppText style={styles.subtitle} >{subtitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,

    },
    imageContainer: {

    },
    title: {
        marginBottom: 7,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
})
