import QueryString from "qs";
import client from "./client";

const BASE_URL = "https://awesome-excellence-7515ffee03.strapiapp.com/api";

const CLUB_EVENTS_END_POINT = "/club-events?";

const params = () =>
  QueryString.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
    },
  });

const getClubEvents = () => client.get(CLUB_EVENTS_END_POINT + params());

const fetchClubEvents = async () => {
  try {
    const response = await fetch(BASE_URL + CLUB_EVENTS_END_POINT + params());
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getClubEvents,
  fetchClubEvents,
};
