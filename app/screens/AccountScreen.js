import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "Enrollments",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.username}
          subTitle={user.email}
          image={require("../assets/male.png")}
        />
      </View>

      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.push(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        style={styles.logout}
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffa500" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  logout: {
    paddingVertical: 25,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
