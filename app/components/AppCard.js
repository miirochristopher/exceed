import Constants from "expo-constants";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppCard({ title, subTitle, image, ButtonComponent }) {
  return (
    <SafeAreaView style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.footer}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        {ButtonComponent}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
  },
  paddingTop: Constants.statusBarHeight,
  subTitle: {
    color: colors.warning,
    fontWeight: "bold",
  },
  title: {
    color: colors.charcoal,
    marginBottom: 7,
  },
});

export default AppCard;
