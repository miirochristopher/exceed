import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import enrollmentsAPI from "../rest/enrollments";
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
  fullName: Yup.string().required().label("Full Name"),
  phoneNumber: Yup.string().required().label("Phone Number"),
  gavelClub: Yup.string().required().label("Club you wish to join"),
  comments: Yup.string().label("Reasons for joining"),
});

function EnrollmentsScreen() {
  const [enrollmentFailed, setEnrollmentFailed] = useState(false);

  const handleSubmit = async (enrollment, { resetForm }) => {
    const result = await enrollmentsAPI.enroll(enrollment);
    if (!result.ok) {
      return setEnrollmentFailed(true);
    } else {
      alert("Successfully confirmed enrollment!");
      resetForm();
    }
    setEnrollmentFailed(false);
    console.log(result.data);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Screen style={styles.container}>
        <Form
          initialValues={{
            fullName: "",
            phoneNumber: "",
            gavelClub: "",
            comments: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            style={styles.error}
            error={"Sorry, enrollment cofirmation failed!"}
            visible={enrollmentFailed}
          />
          <FormField
            autoCorrect={false}
            icon="card-account-details"
            name={"fullName"}
            placeholder="Full Name"
          />
          <FormField
            autoCorrect={false}
            icon={"card-account-phone-outline"}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <FormField
            autoCorrect={false}
            icon={"account-group"}
            name="gavelClub"
            placeholder="Club you wish to join"
          />
          <FormField
            autoCorrect={false}
            icon={"information-outline"}
            name="comments"
            placeholder="Reasons for joining?"
          />
          <SubmitButton title="CONFIRM CLUB REGISTRATION" />
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

export default EnrollmentsScreen;
