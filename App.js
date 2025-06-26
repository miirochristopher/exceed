import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navtheme from "./app/navigation/navtheme";

export default function App() {
  return (
    <NavigationContainer theme={navtheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
