import QueryString from "qs";
import client from "./client";

const CLUB_EVENTS_END_POINT = "/club-events";

const GET_REQUEST_DELIMITER = "?";

const params = () =>
  QueryString.stringify({
    populate: {
      image: {
        fields: ["url"],
      },
    },
  });

const getClubEvents = () =>
  client.get(
    CLUB_EVENTS_END_POINT.concat(GET_REQUEST_DELIMITER).concat(params())
  );

const createEnrollment = (enrollment) => {
  const data = new FormData();
  data.append("fullName", enrollment.fullName);
  data.append("type", enrollment.type);
  data.append("phoneNumber", enrollment.phoneNumber);
  data.append("gavelierClub", enrollment.gavelierClub);
  data.append("attendingWithChildren", enrollment.attendingWithChildren);
  data.append("ChildsName", enrollment.ChildsName);
  data.append("age", enrollment.age);
  data.append("activities", enrollment.activities.value);
  data.append("dietaryRestrictions", enrollment.dietaryRestrictions);
  data.append("heardAboutFitness", enrollment.heardAboutFitness);
  data.append("supportEvent", enrollment.supportEvent);
  data.append("comments", enrollment.comments);

  const metadata = {};
  data.forEach((value, key) => (metadata[key] = value));
  const json = JSON.stringify(metadata);

  console.log(json);

  return client.post(CLUB_EVENTS_END_POINT, json);
};

export default {
  createEnrollment,
  getClubEvents,
};
