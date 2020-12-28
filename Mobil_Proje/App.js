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
      apiKey: "AIzaSyBxLr-A8qT3GY8nd1LjjxNLYKD18xAG52Q",
      authDomain: "crypto-app-7491e.firebaseapp.com",
      databaseURL: "https://crypto-app-7491e.firebaseio.com",
      projectId: "crypto-app-7491e",
      storageBucket: "crypto-app-7491e.appspot.com",
      messagingSenderId: "889480625907",
      appId: "1:889480625907:web:048ef2bd7158682acd8186",
      measurementId: "G-VR3YW6T6C7"
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
