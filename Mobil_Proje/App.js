import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Kriptolar from './pages/KriptoPage'
import ExchangePage from './pages/Exchange'


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="KriptoList" component={Kriptolar} options={{headerShown: false}}/>
          <Stack.Screen name="ExchangeP" component={ExchangePage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
