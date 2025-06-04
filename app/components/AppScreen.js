import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function AppScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
