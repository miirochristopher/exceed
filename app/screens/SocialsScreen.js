import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import socialAPI from "../rest/socials";
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
  attendee: Yup.string().required().label("Attendee"),
  role: Yup.string().required().label("Role"),
  children: Yup.string().required().label("Attending with children?"),
  count: Yup.string().label("Number of children"),
  ages: Yup.string().label("Ages of the children"),
  payment: Yup.string().required().label("Confirm Payment"),
});

function SocialsScreen() {
  const [attendanceFailed, setAttendanceFailed] = useState(false);

  const handleSubmit = async (delegate, { resetForm }) => {
    const result = await socialAPI.attend(delegate);
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
            name={"attendee"}
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
            TMOD, Speaker, Evaluator, Timer, Grammarian, Ah counter, Table
            Topics Master, General Evaluator, Other - specify
          </AppText>
          <FormField
            autoCorrect={false}
            icon={"card-account-details-star"}
            name="children"
            placeholder="Attending with children?"
          />
          <AppText style={styles.small}>Yes or No</AppText>
          <FormField
            autoCorrect={false}
            icon={"card-account-details-star"}
            name="count"
            placeholder="If yes, how many?"
          />
          <FormField
            autoCorrect={false}
            icon={"card-account-details-star"}
            name="ages"
            placeholder="If yes, list their ages?"
          />
          <AppText style={styles.small}>Age 1, Age 2 etc..</AppText>
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

export default SocialsScreen;
