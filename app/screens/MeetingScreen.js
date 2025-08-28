import React, { useState } from "react";
import { StyleSheet } from "react-native";
import meetingAPI from "../rest/meeting";
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
  attendance: Yup.string().required().label("Delegate"),
  role: Yup.string().required().label("Role"),
  payment: Yup.string().required().label("Confirm Payment"),
});

function MeetingScreen() {
  const [attendanceFailed, setAttendanceFailed] = useState(false);

  const handleSubmit = async (delegate, { resetForm }) => {
    const result = await meetingAPI.attend(delegate);
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
    <Screen style={styles.container}>
      <Form
        initialValues={{ attendance: "", role: "", payment: "" }}
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
          name={"attendance"}
          placeholder="Name; attending as?"
        />
        <AppText style={styles.small}>
          A Guest, Member or Visiting Toast Master/Gavellian
        </AppText>
        <FormField
          autoCorrect={false}
          icon={"card-account-details-star"}
          name="role"
          placeholder="Role"
        />
        <AppText style={styles.small}>
          TMOD, Speaker, Evaluator, Timer, Grammarian, Ah counter, Table Topics
          Master, General Evaluator, Other - specify
        </AppText>
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
  small: {
    fontSize: 12,
    color: colors.secondary,
    marginLeft: 6,
  },
});

export default MeetingScreen;
