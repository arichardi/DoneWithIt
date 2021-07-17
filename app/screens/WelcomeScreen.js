import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import imgBack from '../assets/back.jpg'
import logo from '../assets/logo-red.png'


const WelcomeScreen = () => {
    return (
        <ImageBackground
        source={imgBack}
        style={styles.background}
        >
            <View style={styles.logoContainer} >
                <Image 
                source={logo}
                style={styles.logo}
                />
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>   
            <View style={styles.registerButton}></View>   

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
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
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
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
})
