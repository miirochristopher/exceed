import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import dayjs from "dayjs";

import clubEventsAPI from "../rest/events";
import useApi from "../hooks/useApi";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";
import colors from "../config/colors";

function ListingsScreen({ navigation }) {
  const {
    data: events,
    errors,
    loading,
    request: loadEvents,
  } = useApi(clubEventsAPI.getClubEvents);

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <Screen>
      {errors && (
        <>
          <View style={styles.error}>
            <Text style={styles.text}>Couldn't retrieve events!</Text>
            <Button title={"Retry"} onPress={loadEvents} />
          </View>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={events}
        keyExtractor={(event) => event.documentId}
        renderItem={({ item }) => (
          <View style={styles.screen}>
            <Card
              title={item.name}
              subTitle={dayjs(item.date)
                .format("YYYY-MM-DD")
                .concat(" | TIME: ")
                .concat(dayjs(item.date).format("HH:MM"))}
              imageUrl={item.image.url}
              onPress={() => navigation.push("Details", item)}
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  error: {
    flext: 1,
    padding: 10,
  },
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
  text: {
    padding: 10,
  },
});

export default ListingsScreen;
