const settings = {
  development: {
    apiUrl: "https://awesome-excellence-7515ffee03.strapiapp.com/api",
  },
  production: {
    apiUrl: "https://exceedtoastmasters.club/api",
  },
  preview: {
    apiUrl: "http://exceedtoastmasters.club/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__ && process.env.NODE_ENV !== "preview") {
    return settings.development;
  } else if (process.env.NODE_ENV === "preview") {
    return settings.preview;
  } else {
    return settings.production;
  }
};

export default getCurrentSettings();
