import React, {useState} from 'react'
import { FlatList, StyleSheet} from 'react-native'

import ListItem from '../components/ListItem'
import AppScreen from '../components/AppScreen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 't1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 't2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 't3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    }
]

const MessageScreen = (props) => {

    //variables
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setrefreshing] = useState(false)

    //functions
    const handleDelete = (message) => {
        //delete the messages
        const newMessages = messages.filter( m => m.id !== message.id)
        setMessages(newMessages)
    }

    return (
        <AppScreen>

        <FlatList 
            data={messages}
            keyExtractor={ message => message.id.toString() }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={ () => {
                setMessages(
                    [{
                        id: 2,
                        title: 't2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg')
                    }]
                )
            }}
            renderItem={ ({ item }) => 
            <ListItem 
            title={item.title} 
            subtitle={item.description} 
            image={item.image}
            onPress={() => console.log('Message', item)}
            renderRightActions = {() => (
                <ListItemDeleteAction onPress={ () => handleDelete(item)} />
            )}
            /> }
            />
         </AppScreen>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {},
})
