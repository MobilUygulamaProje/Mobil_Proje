import React from "react";
import {
  View, KeyboardAvoidingView, TextInput,
  StyleSheet, Text, TouchableOpacity,
  StatusBar, ScrollView, Alert
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";
import { LoginStackNavigator } from "./StackNavigator";
import firebase from 'firebase';
import Exchange from '../pages/Exchange';
import { createStackNavigator } from "@react-navigation/stack";
import KriptoPage from "../pages/KriptoPage";
import {  
  createSwitchNavigator,  
  createAppContainer,  
} from 'react-navigation';  
import Icon from 'react-native-vector-icons/Octicons';

const SignOut = () => {
  Alert.alert(
      'Bildirim',
      'Çıkmak istediğinize emin misiniz?',
      [
          {
              text: 'Hayır',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
          },
          {
              text: 'Evet',
              onPress: () => firebase.auth().signOut(),
          },
      ],
  )
};

function CustomDrawerContent(props) { 

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sign out" onPress={() => SignOut()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Kripto" component={TabNavigator}/>
      <Drawer.Screen name="Exchange" component={Exchange}/>      
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
