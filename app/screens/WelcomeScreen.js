import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import imgBack from '../assets/back.jpg'
import logo from '../assets/logo-red.png'
import AppButton from '../components/AppButton'


const WelcomeScreen = () => {
    return (
        <ImageBackground
        source={imgBack}
        style={styles.background}
        blurRadius={3}
        >
            <View style={styles.logoContainer} >
                <Image 
                source={logo}
                style={styles.logo}
                />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer} >
                <AppButton title='Login' onPress={ () => console.log('taped')} />  
                <AppButton title='Register' color='secondary' onPress={ () => console.log('taped')} /> 
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        padding: 16,
    }, 
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    tagline: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: '600',
    }
 
})
