import { Image, ImageBackground, StyleSheet } from "react-native";

function SplashScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <Image
        resizeMode={"contain"}
        style={styles.logo}
        source={require("../assets/icon.png")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    position: "absolute",
    top: "30%",
  },
});

export default SplashScreen;
