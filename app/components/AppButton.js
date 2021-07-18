import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppButton = ({title, onPress, color = "primary"}) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})
