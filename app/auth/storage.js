import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const AUTH_TOKEN = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(AUTH_TOKEN, authToken);
  } catch (error) {
    console.log("Error string token", error);
  }
};

const getToken = async () => {
  try {
    await SecureStore.getItemAsync(AUTH_TOKEN);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(AUTH_TOKEN);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getUser, removeToken, storeToken };
