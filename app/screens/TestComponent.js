import React from 'react'
import {  Button, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AppScreen from '../components/AppScreen'
import AuthNavigator from '../navigation/AuthNavigator'

const Tweets = ({navigation}) => (
    <AppScreen>
        <Text>Tweets</Text>
        <Button title='Tweets' onPress={ () => navigation.navigate('TweetDetails', { id: 1})} />
    </AppScreen>
)

const TweetDetails = ({navigation, route}) => (
    <AppScreen>
        <Text>Tweet Details {route.params.id} </Text>
        <Button title='TweetDetails' onPress={ () => navigation.navigate('Tweets')}  />
    </AppScreen>
)

const Account = () => (
    <AppScreen>
        <Text>Account Text</Text>
    </AppScreen>
)

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Tweet' component={Tweets} />
        <Stack.Screen name='TweetDetails' component={TweetDetails} options={ ({route}) => ({title: route.params.id})}/>
    </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Tweets} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    )
}

const TestComponent = () => {
return (
    <NavigationContainer>
        <AuthNavigator />
    </NavigationContainer>
)
}

export default TestComponent
