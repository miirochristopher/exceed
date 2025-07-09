import { create } from "apisauce";
import settings from "../config/settings";

const client = create({
  baseURL: settings.apiUrl,
});

export default client;
