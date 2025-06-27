import client from "./client";

const CLUB_EVENTS_END_POINT = "/club-events?populate=documents";

const getClubEvents = () => client.get(CLUB_EVENTS_END_POINT);

export default {
  getClubEvents,
};
