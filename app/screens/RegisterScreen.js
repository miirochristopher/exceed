import React, { useState } from "react";
import { StyleSheet } from "react-native";
import regAPI from "../rest/signup";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [signupFailed, setSignupFailed] = useState(false);

  const handleSubmit = async (user) => {
    const result = await regAPI.register(user);
    console.log(result.data);
    if (!result.ok) return setSignupFailed(true);
    setSignupFailed(false);
    console.log(result.data.user);
    console.log(result.data.jwt);
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          style={styles.error}
          error={"Sorry, registration failed!"}
          visible={signupFailed}
        />

        <FormField
          autoCorrect={false}
          icon="account"
          name={"username"}
          placeholder="Username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name={"password"}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.bright,
  },
  error: {
    marginLeft: 20,
  },
});

export default RegisterScreen;
