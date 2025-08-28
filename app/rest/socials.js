import client from "./client";

const SOCIAL_ENDPOINT = "/socials";

const attend = (delegate) => {
  const payload = {
    data: {
      attendee: delegate.attendee,
      role: delegate.role,
      children: delegate.children == "Yes" ? 1 : 0,
      count: delegate.count,
      ages: delegate.ages,
      payment: delegate.payment,
    },
  };
  return client.post(SOCIAL_ENDPOINT, payload);
};

export default {
  attend,
};
