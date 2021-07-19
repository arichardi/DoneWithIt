import React, {useState} from 'react'
import { StyleSheet, View,Text } from 'react-native'
import AppCard from '../components/AppCard'
import AppPicker from '../components/AppPicker'
import AppTextInput from '../components/AppTextInput'
import colors from '../config/colors'

const categories = [
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Cameras", value: 3},
]

const TestComponent = () => {

    const [category, setCategory] = useState(categories[0])

    return (
        <View style={styles.container}>
            <AppTextInput placeholder='Email' icon='email' />
            <AppPicker 
            selectedItem={category}
            onSelectedItem={item => setCategory(item)}
            items={categories}
            placeholder='Category'
            icon='apps' />
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
