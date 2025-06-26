import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const events = [
  {
    uuid: "6c8c8380-fa6d-419b-8daf-c7c7e55eeb5e",
    name: "Living a healthy life",
    date: "16-05-2025",
    image: require("../assets/sale.jpg"),
  },
  {
    uuid: "c544421b-73ed-49a8-8e14-e06adcbedac4",
    name: "Health is wealth",
    date: "18-05-2025",
    image: require("../assets/sale.jpg"),
  },
  {
    uuid: "f8e96f1a-c327-4633-a37e-4ccfcf40ab1d",
    name: "Journey of faith",
    date: "17-05-2025",
    image: require("../assets/sale.jpg"),
  },
  {
    uuid: "e1bf827a-d994-45fd-891e-7061139e527a",
    name: "A walk to remeber",
    date: "17-05-2025",
    image: require("../assets/sale.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={events}
        keyExtractor={(event) => event.uuid}
        renderItem={({ item }) => (
          <View style={styles.events}>
            <Card
              title={item.name}
              subTitle={item.date}
              image={item.image}
              onPress={() => navigation.push("Details", item)}
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bright,
    marginVertical: 0,
    shadowColor: colors.charcoal,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    fontWeight: "700",
  },
});

export default ListingsScreen;
