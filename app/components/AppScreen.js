import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default function AppScreen({children}) {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})