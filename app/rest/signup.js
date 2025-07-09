import client from "./client";

const AUTH_ENDPOINT = "/auth/local/register";

const register = (user) => {
  const payload = {
    email: user.email,
    username: user.username,
    password: user.password,
  };
  return client.post(AUTH_ENDPOINT, payload);
};

export default {
  register,
};
