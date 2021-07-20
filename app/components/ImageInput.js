import React, {useEffect} from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'

const ImageInput = ({imageUri, onChangeImage}) => {

    useEffect( () => {
        requestPermition()
    }, [])

    const requestPermition = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!result.granted)
            alert('you need to eneble permision to access the library')
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled)
                onChangeImage(result.uri);
        } catch (error) {
            console.log('Error reading the image', error)
        }
    }
    
    const handlePress = () => {
        if( !imageUri ) {selectImage()}
        else {
            Alert.alert('delete', 'are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => onChangeImage(null)},
                { text: 'No'},
            ])
        }
        
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            { !imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
            { imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
