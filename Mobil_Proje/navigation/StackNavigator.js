import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favori from '../pages/Favori';
import Kripto from '../pages/KriptoPage';
import Exchange from '../pages/Exchange';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kripto" component={Kripto} options={{headerStyle:{backgroundColor:"#2a2d3c"}, 
      headerTitleStyle:{color:"white"}}} options={{headerShown: false}}/>
      <Stack.Screen name="Exchange" component={Exchange} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const FavoriStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favori" component={Favori} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, FavoriStackNavigator, LoginStackNavigator };