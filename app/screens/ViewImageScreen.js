import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close-octagon"
          color={colors.danger}
          size={35}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialIcons
          name="arrow-circle-right"
          color={colors.warning}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/background.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
