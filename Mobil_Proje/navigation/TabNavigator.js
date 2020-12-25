import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, FavoriStackNavigator } from "./StackNavigator";
import Icon from 'react-native-vector-icons/Ionicons';  


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Kripto" component={MainStackNavigator} options={{tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )  }} />
      <Tab.Screen name="Favori" component={FavoriStackNavigator} options={{tabBarIcon:({tintColor})=>(  
              <Icon name="ios-star" color={tintColor} size={25}/>  
          )  }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;