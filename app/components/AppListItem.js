import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function AppListItem({ title, subTitle, image, IconComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.grey} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    padding: 7,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.pale,
    fontSize: 12,
    opacity: 0.7,
  },
  title: {
    fontSize: 18,
    color: colors.charcoal,
    fontWeight: "700",
  },
});

export default AppListItem;
