import { FlatList, StyleSheet } from "react-native";

import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/male.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/female.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 4,
    title: "T4",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 5,
    title: "T5",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 6,
    title: "T6",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 7,
    title: "T7",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 8,
    title: "T8",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 9,
    title: "T9",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 10,
    title: "T10",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 11,
    title: "T11",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 12,
    title: "T12",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 13,
    title: "T13",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 14,
    title: "T14",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 15,
    title: "T15",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 16,
    title: "T16",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 17,
    title: "T17",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 18,
    title: "T18",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 19,
    title: "T19",
    description: "D3",
    image: require("../assets/female.png"),
  },
  {
    id: 20,
    title: "T20",
    description: "D3",
    image: require("../assets/female.png"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        contentContainerStyle={styles.listing}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messages touched", item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 6,
              title: "T6",
              description: "D3",
              image: require("../assets/female.png"),
            },
            {
              id: 7,
              title: "T7",
              description: "D3",
              image: require("../assets/female.png"),
            },
            {
              id: 8,
              title: "T8",
              description: "D3",
              image: require("../assets/female.png"),
            },
            {
              id: 9,
              title: "T9",
              description: "D3",
              image: require("../assets/female.png"),
            },
          ])
        }
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  listing: {
    padding: 12,
    opacity: 0.7,
    backgroundColor: colors.light,
  },
});

export default MessagesScreen;
