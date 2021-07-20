import React from 'react'
import { Image, StyleSheet} from 'react-native'

import * as Yup from 'yup'
import AppScreen from '../components/AppScreen'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'

const LoginScreen = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password')
    })

    return (
        <AppScreen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />

            <AppForm
                initialValues={ {email: '', password: ''}}
                onSubmit={ values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='email'
                    placeholder='email'
                    icon='email'
                    autoCaptalize='none'
                    autoCorrent={false}
                    keybordType='email-address'
                />
                <AppFormField 
                    name= 'password'
                    placeholder='password'
                    icon='lock'
                    autoCaptalize='none'
                    autoCorrent={false}
                    keybordType='email-address'
                    secureTextEntry={true}
                />
                <SubmitButton title='Login' />
            </AppForm>

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
