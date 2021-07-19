import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import AppCard from '../components/AppCard'
import AppTextInput from '../components/AppTextInput'
import colors from '../config/colors'

const TestComponent = () => {
    return (
        <View style={styles.container}>

            <AppTextInput placeholder='name' icon='email'/>
        </View>
    )
}

export default TestComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        padding: 10,
        paddingTop: 100, 
        
    }
})
