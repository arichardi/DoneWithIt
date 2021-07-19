import React from 'react'
import { StyleSheet, TextInput, View, Platform } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyle from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            { icon && 
                <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    colors={colors.medium}
                    style={styles.icon} />}
            <TextInput style={defaultStyle.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },

})
