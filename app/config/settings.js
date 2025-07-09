const settings = {
  development: {
    apiUrl: "https://awesome-excellence-7515ffee03.strapiapp.com/api",
  },
  production: {
    apiUrl: "https://exceedtoastmasters.club/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.development;
  } else {
    return settings.production;
  }
};

export default getCurrentSettings();
