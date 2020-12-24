import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function TabNavi({navigation}) {
    return (

     
        <>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
        </>
    )
}

export default TabNavi