import React from "react";
import { View, Image, StyleSheet } from "react-native";

import dayjs from "dayjs";

import colors from "../config/colors";
import Button from "../components/Button";
import Text from "../components/Text";

function ListingDetailsScreen({ navigation, route }) {
  const event = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: event.image.url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>
          DATE:{" "}
          {dayjs(event.date)
            .format("YYYY-MM-DD")
            .concat(" | TIME: ")
            .concat(dayjs(event.date).format("HH:MM"))}
        </Text>
        <Text style={styles.moderator}>{event.moderator}</Text>
        <View style={styles.enrollmentContainer}>
          <Button
            title={"Enroll"}
            color="secondary"
            onPress={() => navigation.navigate("Enroll", event)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  enrollmentContainer: {
    paddingVertical: 40,
  },
  image: {
    width: "100%",
    height: 300,
  },
  moderator: {
    fontSize: 20,
    color: colors.orange,
    fontWeight: "700",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
