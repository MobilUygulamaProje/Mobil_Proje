import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { LoginStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Kripto" component={TabNavigator}/>
      <Drawer.Screen name="Login" component={LoginStackNavigator} />
      <Drawer.Screen name="Register" component={LoginStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;