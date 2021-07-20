import React, { useState} from 'react'
import {StyleSheet } from 'react-native'

import AppScreen from '../components/AppScreen'
import ImageInputList from '../components/ImageInputList'
import ImageInput from '../components/ImageInput'

const TestComponent = () => {


    const [imageUris, setImageUris] = useState([])

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri])
    }

    const handleRemove = uri => {
        setImageUris(imageUris.filter( imageUri => imageUri !== uri ))
    }

     return (
        <AppScreen>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}

             />
             {console.log(imageUris)}
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
