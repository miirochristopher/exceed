import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import navtheme from "./app/navigation/navtheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import vault from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const reclaimUser = async () => {
    const user = await vault.getUser();
    if (user) return setUser(user);
    setIsReady(true);
  };

  useEffect(() => {
    reclaimUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={navtheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
