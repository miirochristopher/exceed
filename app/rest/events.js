import QueryString from "qs";
import client from "./client";

const CLUB_EVENTS_END_POINT = "/club-events?";

const params = () =>
  QueryString.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
    },
  });

const getClubEvents = () => client.get(CLUB_EVENTS_END_POINT.concat(params()));

export default {
  getClubEvents,
};
