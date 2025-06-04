import { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import AppListItem from "../components/AppListItem";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const eventSpeakers = [
  {
    uuid: "a3acab49-2d5c-42b9-80ea-5623b2cc3458",
    name: "Event Speaker",
    image: require("../assets/male.png"),
    profession: "Health Expert",
  },
];

function EventDetailsScreen() {
  const [speakers, setSpeakers] = useState(eventSpeakers);

  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/background.png")}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Healthy Living Principles</AppText>
          <AppText style={styles.date}>16-05-2025</AppText>
          <View style={styles.userContainer}>
            <FlatList
              data={speakers}
              keyExtractor={(speaker) => speaker.uuid}
              contentContainerStyle={styles.speaker}
              renderItem={({ item }) => (
                <AppListItem
                  title={item.name}
                  subTitle={item.profession}
                  image={item.image}
                  onPress={() => console.log("Speaker", item)}
                />
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Register"}
          color={"orange"}
          onPress={console.log("Register Tapped")}
        />
        <AppButton
          title="Continue As Guest"
          color={"primary"}
          onPress={console.log("Guest  Tapped")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  date: {
    color: colors.warning,
    marginiVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  buttonsContainer: {
    padding: 25,
    width: "100%",
    marginBottom: "25%",
    backgroundColor: colors.charcoal,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    color: colors.charcoal,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
  speaker: {
    padding: 12,
    backgroundColor: colors.white,
  },
});

export default EventDetailsScreen;
