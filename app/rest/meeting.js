import client from "./client";

const MEETING_ENDPOINT = "/meetings";

const attend = (delegate) => {
  const payload = {
    data: {
      attendance: delegate.attendance,
      role: delegate.role,
      payment: delegate.payment,
    },
  };
  return client.post(MEETING_ENDPOINT, payload);
};

export default {
  attend,
};
