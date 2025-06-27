import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import clubEventsAPI from "../rest/events";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

function ListingsScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const response = await clubEventsAPI.fetchClubEvents();
    console.log(JSON.stringify(response.data));
    setEvents(response.data);
  };

  return (
    <Screen>
      {events && (
        <FlatList
          data={events}
          keyExtractor={(event) => event.documentId}
          renderItem={({ item }) => (
            <View style={styles.screen}>
              <Card
                title={item.name}
                subTitle={item.date}
                imageUrl={item.image.url}
                onPress={() => navigation.push("Details", item)}
              />
            </View>
          )}
        />
      )}
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
