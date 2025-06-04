import { Image, ImageBackground, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <AppText style={styles.tagline}>Exceed Toast Masters Club</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Sign Up"
          color="orange"
          onPress={console.log("Tapped SignUp")}
        />
        <AppButton
          title="Continue As Guest"
          color="primary"
          onPress={console.log("Tapped Guest")}
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
    padding: 25,
    width: "100%",
    marginBottom: "25%",
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
