import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();

const EventNavigator = () => (
  <Stack.Navigator mode={"modal"} screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Event"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Enroll"
      component={ListingEditScreen}
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
