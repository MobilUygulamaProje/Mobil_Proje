import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Kriptolar from './KriptoPage'
import ExchangePage from './Exchange'
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function StackNavi({navigation}) {
    return (
        <>
        <Stack.Navigator >
          <Stack.Screen name="KriptoList" component={Kriptolar} options={{headerShown: false}}/>
          <Stack.Screen name="ExchangeP" component={ExchangePage} options={{headerShown: false}}/>
        </Stack.Navigator>
        </>
    )
}

export default StackNavi