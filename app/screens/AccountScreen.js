import Constants from "expo-constants";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";

const userDetails = [
  {
    uuid: "0a63edb0-a25f-478f-b5df-9332912114fe",
    name: "Generic User",
    profession: "Health Expert",
    image: require("../assets/female.png"),
  },
];

const menuItems = [
  {
    title: "Events",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.warning,
    },
  },
  {
    title: "Purchases",
    icon: {
      name: "basket",
      backgroundColor: colors.purple,
    },
  },
  {
    title: "Settings",
    icon: {
      name: "cog",
      backgroundColor: colors.charcoal,
    },
  },
];

const actionItems = [
  {
    title: "Logout",
    icon: {
      name: "logout",
      backgroundColor: colors.danger,
    },
  },
];

function AccountScreen() {
  return (
    <AppScreen>
      <View style={styles.container}>
        <FlatList
          data={userDetails}
          keyExtractor={(userDetail) => userDetail.uuid}
          contentContainerStyle={styles.profile}
          renderItem={({ item }) => (
            <AppListItem
              title={item.name}
              subTitle={item.profession}
              image={item.image}
              onPress={() => console.log("Profile", item)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          contentContainerStyle={styles.details}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("Menu Item", item)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={actionItems}
          keyExtractor={(actionItem) => actionItem.title}
          contentContainerStyle={styles.actions}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("Logout", item)}
            />
          )}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginVertical: 0,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    shadowColor: colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  profile: {
    padding: 12,
    opacity: 0.7,
    backgroundColor: colors.light,
  },
  details: {
    padding: 12,
    backgroundColor: colors.light,
  },
  actions: {
    padding: 12,
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
