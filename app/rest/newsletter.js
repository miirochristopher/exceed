import client from "./client";

const NEWSLETTER_ENDPOINT = "/newsletters";

const subscribe = (subscription) => {
  const payload = {
    data: {
      email: subscription.email,
    },
  };
  return client.post(NEWSLETTER_ENDPOINT, payload);
};

export default {
  subscribe,
};
