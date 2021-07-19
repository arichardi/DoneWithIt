import React, {useState} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppScreen from '../components/AppScreen'
import AppTextInput from '../components/AppTextInput'

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <AppTextInput 
                placeholder='email'
                icon='email'
                autoCaptalize='none'
                onChangeText={ text => setUsername(text)}
                autoCorrent={false}
                keybordType='email-address'
            />
            <AppTextInput 
                placeholder='password'
                icon='lock'
                autoCaptalize='none'
                onChangeText={ text => setPassword(text)}
                autoCorrent={false}
                keybordType='email-address'
                secureTextEntry={true}
            />
            <AppButton title='Login' onPress={ () => console.log(username, password)} />
        </AppScreen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})
