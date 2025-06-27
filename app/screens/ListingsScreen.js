import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import clubEventsAPI from "../rest/events";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

function ListingsScreen({ navigation }) {
  const [clubEvents, setClubEvents] = useState([]);

  useEffect(() => {
    loadClubEvents();
  }, []);

  const loadClubEvents = async () => {
    const response = await clubEventsAPI.getClubEvents();
    console.log(JSON.stringify(response.data));
    setClubEvents(response.data.data);
  };

  return (
    <Screen>
      <FlatList
        data={clubEvents}
        keyExtractor={(clubEvent) => clubEvent.documentId}
        renderItem={({ item }) => (
          <View style={styles.screen}>
            <Card
              title={item.name}
              subTitle={item.date}
              image={item.venue}
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
