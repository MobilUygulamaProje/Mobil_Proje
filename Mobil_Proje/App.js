import * as React from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import StackNavi from './pages/stackNavi';
import TabNavi from './pages/TabNavi';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer >
        <Drawer.Navigator >
          <Drawer.Screen name="Kripto" component={StackNavi}/>
          <Drawer.Screen name="Login" component={TabNavi}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}