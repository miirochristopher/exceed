import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import contestsAPI from "../rest/contests";
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
  speaker: Yup.string().required().label("Speaker"),
  role: Yup.string().required().label("Role"),
  payment: Yup.string().required().label("Confirm Payment"),
});

function ContestsScreen() {
  const [attendanceFailed, setAttendanceFailed] = useState(false);

  const handleSubmit = async (delegate, { resetForm }) => {
    const result = await contestsAPI.attend(delegate);
    if (!result.ok) {
      return setAttendanceFailed(true);
    } else {
      alert("Successfully confirmed attendance!");
      resetForm();
    }
    setAttendanceFailed(false);
    console.log(result.data);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Screen style={styles.container}>
        <Form
          initialValues={{ speaker: "", role: "", payment: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            style={styles.error}
            error={"Sorry, attendance cofirmation failed!"}
            visible={attendanceFailed}
          />
          <FormField
            autoCorrect={false}
            icon="card-account-details"
            name={"speaker"}
            placeholder="Name; attending as?"
          />
          <AppText style={styles.small}>
            A Contestant, Guest, Member or Visiting Toast Master, Others
          </AppText>
          <FormField
            autoCorrect={false}
            icon={"card-account-details-star"}
            name="role"
            placeholder="Role"
          />
          <AppText style={styles.small}>Contestant, Other - specify</AppText>
          <FormField
            autoCorrect={false}
            icon="credit-card-check"
            name={"payment"}
            placeholder="Payment Method"
          />
          <AppText style={styles.small}>MoMo, Cash, Other</AppText>
          <SubmitButton title="CONFIRM ATTENDANCE" />
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

export default ContestsScreen;
