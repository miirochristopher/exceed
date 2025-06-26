import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="Events" component={ListingsScreen} />
    <Tab.Screen name="Enroll" component={ListingEditScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
