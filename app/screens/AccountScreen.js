import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import AppScreen from '../components/AppScreen'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

//menu itens list
const menuItens = [{
    title: 'My listings',
    icon: {
        name: 'format-list-bulleted',
        backgroundColor: colors.primary
    }},{
    title: 'My messages',
    icon: {
        name: 'email',
        backgroundColor: colors.secondary
    },
    
}]


const AccountScreen = () => {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container} >
            <ListItem 
                title='Mosh hamedani'
                subtitle='exemple@gmail.com'
                image={require('../assets/mosh.jpg')}
                />
                </View>
                <View style={styles.container} >
                    <FlatList 
                        data={menuItens}
                        keyExtractor={ menuItem => menuItem.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={ ({item}) => 
                    <ListItem 
                        title={item.title}
                        IconComponent={
                            <Icon 
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                    /> }
                    />
                </View>
                <ListItem 
                    title='logout'
                    IconComponent={
                        <Icon name='logout' backgroundColor='#ffe66d' />
                    }
                />
        </AppScreen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,

    },
    screen: {
        backgroundColor: colors.light
    }
})
