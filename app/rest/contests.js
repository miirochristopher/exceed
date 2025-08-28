import client from "./client";

const CONTESTS_ENDPOINT = "/contests";

const attend = (delegate) => {
  const payload = {
    data: {
      speaker: delegate.speaker,
      role: delegate.role,
      payment: delegate.payment,
    },
  };
  return client.post(CONTESTS_ENDPOINT, payload);
};

export default {
  attend,
};
