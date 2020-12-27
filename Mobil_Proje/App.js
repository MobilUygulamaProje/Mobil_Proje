import React from 'react'
import firebase from 'firebase';
import {
  View, KeyboardAvoidingView, TextInput,
  StyleSheet, Text, TouchableOpacity,
  StatusBar, ScrollView, Alert
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Kripto from "./navigation/DrawerNavigator";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Stack = createStackNavigator();

export default function App(){
  
    var firebaseConfig = {
      apiKey: "AIzaSyBwQQ_cpncn6-RqPWCXO1psJWKF-P220XA",
      authDomain: "reactdeneme-f9f53.firebaseapp.com",
      projectId: "reactdeneme-f9f53",
      storageBucket: "reactdeneme-f9f53.appspot.com",
      messagingSenderId: "588535226176",
      appId: "1:588535226176:web:a9bd7189e736b246f7a4a5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Kripto" component={Kripto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
