import client from "./client";

const AUTH_ENDPOINT = "/auth/local";

const login = (user) => {
  const payload = {
    identifier: user.identifier,
    password: user.password,
  };
  return client.post(AUTH_ENDPOINT, payload);
};

export default {
  login,
};
