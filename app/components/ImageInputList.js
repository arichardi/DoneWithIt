import React, { useRef } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import ImageInput from './ImageInput'


const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage}) => {

    const scrollview = useRef();

return (
    <View>
    <ScrollView 
        ref={scrollview}
        horizontal 
        onContentSizeChange={ () => scrollview.current.scrollToEnd()}
        >
        <View style={styles.container}>
            {imageUris.map( uri => (
            <View key={uri} >
            <ImageInput 
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
            />
            </View>
            ))}
            <ImageInput 
            onChangeImage={ uri => onAddImage(uri)} 
            />
        </View>
    </ScrollView>
    </View>
)
}
export default ImageInputList
const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
},
images: {
    marginRight: 10,
}
})