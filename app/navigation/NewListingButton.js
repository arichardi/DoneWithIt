import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NewListingButton = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' size={30} color={colors.white} />
        </View>
        </TouchableWithoutFeedback>
    )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: colors.white,
        borderWidth: 10,
        bottom: 40,

        alignItems: 'center',
        justifyContent: 'center',
    }
})
