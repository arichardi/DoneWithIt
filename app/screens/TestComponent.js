import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import AppCard from '../components/AppCard'
import colors from '../config/colors'

const TestComponent = () => {
    return (
        <View style={styles.container}>
            <AppCard 
            title='Red Jacket'
            subtitle='$100'
            image={require('../assets/jacket.jpg')}
            />
        </View>
    )
}

export default TestComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.grey,
        padding: 10,
        paddingTop: 100, 
        
    }
})
