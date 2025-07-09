import { useContext } from "react";

import AuthContext from "./context";
import vault from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken, authUser) => {
    setUser(authUser);
    vault.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    vault.removeToken();
  };

  return { user, logIn, logOut };
};
