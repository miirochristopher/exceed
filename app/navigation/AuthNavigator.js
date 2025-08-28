import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import ListingsScreen from "../screens/ListingsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import MeetingScreen from "../screens/MeetingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Events" component={ListingsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Meeting" component={MeetingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
