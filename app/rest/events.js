import QueryString from "qs";
import client from "./client";

const CLUB_EVENTS_END_POINT = "/club-events";

const GET_REQUEST_DELIMITER = "?";

const EVENTS_REGISTRATION_ENDPOINT = "/events";

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
  const payload = {
    data: {
      fullName: enrollment.fullName,
      phoneNumber: enrollment.phoneNumber,
      event: enrollment.event,
      gavelClub: enrollment.gavelClub,
      attendingWithChildren: enrollment.attendingWithChildren,
      childsName: enrollment.childsName,
      age: enrollment.age,
      activities: enrollment.activities.label,
      dietaryRestrictions: enrollment.dietaryRestrictions,
      heardAboutFitness: enrollment.heardAboutFitness,
      supportEvent: enrollment.supportEvent,
      comments: enrollment.comments,
    },
  };

  console.log(payload);

  return client.post(EVENTS_REGISTRATION_ENDPOINT, payload);
};

export default {
  createEnrollment,
  getClubEvents,
};
