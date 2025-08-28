import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.buttonsContainer}>
        <Text style={styles.events}>Club Events/Meetings</Text>
        <Button
          color="secondary"
          title="Physical meetings"
          onPress={() => navigation.push("Meeting")}
        />
        <Button
          title="Social meetings"
          color="secondary"
          onPress={() => navigation.push("Socials")}
        />
        <Button
          title="Speech Contests"
          color="secondary"
          onPress={() => navigation.push("Contests")}
        />
        <Button
          title="Our Newsletter"
          color="secondary"
          onPress={() => navigation.push("Newsletter")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: "25%",
  },
  events: {
    alignContent: "center",
    color: colors.primary,
    display: "flex",
    fontWeight: 600,
    fontSize: 28,
    justifyContent: "center",
    marginLeft: 20,
    marginBottom: 35,
    marginTop: 35,
  },
});

export default HomeScreen;
