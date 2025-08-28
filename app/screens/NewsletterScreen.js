import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import newsletterAPI from "../rest/newsletter";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import AppText from "../components/Text";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function NewsletterScreen() {
  const [subscriptionFailed, setSubscriptionFailed] = useState(false);

  const handleSubmit = async (subscription, { resetForm }) => {
    const result = await newsletterAPI.subscribe(subscription);
    if (!result.ok) {
      return setSubscriptionFailed(true);
    } else {
      alert("Successfully confirmed subscription!");
      resetForm();
    }
    setSubscriptionFailed(false);
    console.log(result.data);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Screen style={styles.container}>
        <Form
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            style={styles.error}
            error={"Sorry, subscription cofirmation failed!"}
            visible={subscriptionFailed}
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
          <AppText style={styles.small}>
            Subscribe to our periodic Newsletter and Articles!
          </AppText>
          <SubmitButton title="CONFIRM SUBSCRIPTION" />
        </Form>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.bright,
    marginBottom: 35,
  },
  error: {
    marginLeft: 20,
  },
  small: {
    fontSize: 12,
    color: colors.secondary,
    marginLeft: 6,
  },
});

export default NewsletterScreen;
