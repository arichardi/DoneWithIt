import React, {useEffect, useState} from 'react'
import { Button, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import AppScreen from '../components/AppScreen'
import ImageInput from '../components/ImageInput'

const TestComponent = () => {


    const [imageUri, setImageUri] = useState()

    const requestPermition = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!result.granted)
            alert('you need to eneble permision to access the library')
    }

    useEffect( () => {
        requestPermition();
    },[])



    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled)
                setImageUri(result.uri);
        } catch (error) {
            console.log('Error reading the image', error)
        }
    }

    

    return (
        <AppScreen>
            <ImageInput onChangeImage={ uri => setImageUri(uri)} imageUri={imageUri} />
        </AppScreen>
    )
}

export default TestComponent

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
})
