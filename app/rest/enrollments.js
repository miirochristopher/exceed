import client from "./client";

const ENROLLMENTS_END_POINT = "/events";

const enroll = (enrollment) => {
  const payload = {
    data: {
      fullName: enrollment.fullName,
      phoneNumber: enrollment.phoneNumber,
      gavelClub: enrollment.gavelClub,
      comments: enrollment.comments,
    },
  };
  return client.post(ENROLLMENTS_END_POINT, payload);
};

export default {
  enroll,
};
