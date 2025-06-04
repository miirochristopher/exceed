import { useState } from "react";
import Constants from "expo-constants";
import { FlatList, StyleSheet, View } from "react-native";

import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const allEvents = [
  {
    uuid: "6c8c8380-fa6d-419b-8daf-c7c7e55eeb5e",
    name: "Living a healthy life",
    date: "16-05-2025",
    image: require("../assets/background.png"),
  },
  {
    uuid: "c544421b-73ed-49a8-8e14-e06adcbedac4",
    name: "Health is wealth",
    date: "18-05-2025",
    image: require("../assets/background.png"),
  },
  {
    uuid: "f8e96f1a-c327-4633-a37e-4ccfcf40ab1d",
    name: "Journey of faith",
    date: "17-05-2025",
    image: require("../assets/background.png"),
  },
  {
    uuid: "e1bf827a-d994-45fd-891e-7061139e527a",
    name: "A walk to remeber",
    date: "17-05-2025",
    image: require("../assets/background.png"),
  },
];

function EventsScreen() {
  const [events, setEvents] = useState(allEvents);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={events}
          keyExtractor={(event) => event.uuid}
          contentContainerStyle={styles.event}
          renderItem={({ item }) => (
            <View style={styles.events}>
              <AppCard
                title={item.name}
                subTitle={item.date}
                image={item.image}
                ButtonComponent={
                  <View>
                    <AppButton
                      title={"Register"}
                      color="orange"
                      padding={"7"}
                      onPress={console.log(
                        "Register For Event Tapped Button component"
                      )}
                    />
                  </View>
                }
              />
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  registerButton: {
    width: 20,
  },
  event: {
    padding: 20,
    backgroundColor: colors.light,
  },
  events: {
    backgroundColor: colors.light,
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

export default EventsScreen;
