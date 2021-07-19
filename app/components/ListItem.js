import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors'
import AppText from './AppText'

const ListItem = ({title, subtitle, image, onPress, IconComponent, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={colors.light}
            >
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >{title}</AppText>
                { subtitle && <AppText style={styles.subtitle} >{subtitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium,
    },
})
