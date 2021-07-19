import React, {useState} from 'react'
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyle from '../config/styles'
import AppText from './AppText'
import AppScreen from './AppScreen'
import PickerItem from './PickerItem'

const AppPicker = ({selectedItem, onSelectedItem ,icon, items,  placeholder}) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={ () => setModalVisible(true)}>
        <View style={styles.container}>
            { icon && 
                <MaterialCommunityIcons 
                name={icon}
                size={20}
                colors={colors.medium}
                style={styles.icon} />}
            <AppText style={styles.text} >{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons 
                    name='chevron-down'
                    size={20}
                    colors={colors.medium}
                    />
        </View>
        </TouchableWithoutFeedback>
        <Modal 
            visible={modalVisible}
            animationType='slide'        
        >
            <AppScreen>
            <Button title='close' onPress={ () => setModalVisible(false)} />
            <FlatList 
                data={items}
                keyExtractor={ item => item.value.toString()}
                renderItem={ ({item}) => 
                <PickerItem 
                    label={item.label}
                    onPress={ () => {
                        setModalVisible(false)
                        onSelectedItem(item)
                    }}
                />
            }
            />
            </AppScreen>
        </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})
