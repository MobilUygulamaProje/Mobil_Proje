import React from "react";
import { Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";
import firebase from 'firebase';
import Exchange from '../pages/Exchange';
import Bildirim from "../pages/Bildirim";

const SignOut = () => {
  Alert.alert(
      'Bildirim',
      'Çıkmak istediğinize emin misiniz?',
      [
          {
              text: 'Hayır',
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
      <DrawerItem label="Çıkış Yap" onPress={() => SignOut()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Kripto Paralar" component={TabNavigator}/>
      <Drawer.Screen name="Kripto Para Çevir" component={Exchange}/>   
      <Drawer.Screen name="Bildirim Gönder" component={Bildirim}/> 
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
