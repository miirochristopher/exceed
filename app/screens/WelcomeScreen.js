import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={80}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Exceed Toastmasters Club</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Become A Member"
          onPress={() => navigation.push("Register")}
        />
        <Button
          title="Continue As Guest"
          color="secondary"
          onPress={() => navigation.push("Events")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: "25%",
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
