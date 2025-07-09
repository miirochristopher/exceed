import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import authAPI from "../rest/auth";
import * as Yup from "yup";

import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

import Text from "../components/Text";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Email or Username"),
  password: Yup.string().required().label("Password"),
});

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (user) => {
    const result = await authAPI.login(user);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data.jwt, result.data.user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <ErrorMessage
        style={styles.error}
        error={"Invalid username and/or password"}
        visible={loginFailed}
      />

      <Form
        initialValues={{ identifier: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="identifier"
          placeholder="Email or Username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        Not registered? Signup
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  error: {
    padding: 10,
  },
  link: {
    color: colors.secondary,
    paddingBottom: 15,
    paddingLeft: "20%",
    paddingTop: 10,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;
