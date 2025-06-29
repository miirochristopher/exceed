import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const EventNavigator = () => (
  <Stack.Navigator mode={"modal"} screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Events"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default EventNavigator;
