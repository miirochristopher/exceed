import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import clubEventsAPI from "../rest/events";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import PickerItemType from "../components/PickerItemType";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(3).label("Full name"),
  phoneNumber: Yup.string().required().min(10).label("Phone number"),
  event: Yup.string().label("Event"),
  gavelClub: Yup.string().label("Have gavel club?"),
  attendingWithChildren: Yup.string()
    .required()
    .label("Will attend with children?"),
  childsName: Yup.string().label("Child's name(s) if attending"),
  age: Yup.number().min(1).label("Age"),
  activities: Yup.object().required().nullable().label("Activities"),
  dietaryRestrictions: Yup.string().label("Any dietary restrictions?"),
  heardAboutFitness: Yup.string().label("How you heard about fitness"),
  supportEvent: Yup.string().label("Like to support the event?"),
  comments: Yup.string().label("Comments"),
});

const interests = [
  {
    backgroundColor: "#fc5c65",
    icon: "sports-gymnastics",
    label: "Aerobics",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "games",
    label: "Games",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "sports-basketball",
    label: "Basketball",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "sports-cricket",
    label: "Badminton",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "sports-tennis",
    label: "Tennis",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "pool",
    label: "Swimming",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "castle",
    label: "Castle",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "music-note",
    label: "Live band",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "people",
    label: "Socializing",
    value: 9,
  },
];

function ListingEditScreen({ route }) {
  const enrollInto = route.params;

  const [eventName] = useState(enrollInto.name);

  const handleSubmit = async (enrollment, { resetForm }) => {
    const result = await clubEventsAPI.createEnrollment(enrollment);
    if (!result.ok) {
      console.log(result.originalError.message);
      return alert("Could not save enrollment!");
    } else {
      alert("Enrollment was successful!");
      resetForm();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Screen style={styles.container}>
        <Form
          initialValues={{
            fullName: "",
            event: enrollInto.name,
            phoneNumber: "",
            gavelierClub: "",
            attendingWithChildren: "",
            childsName: "",
            age: "",
            activities: null,
            dietaryRestrictions: "",
            heardAboutFitness: "",
            supportEvent: "",
            comments: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            maxLength={255}
            name={"event"}
            defaultValue={eventName}
            editable={false}
          />
          <FormField
            maxLength={255}
            name={"fullName"}
            placeholder="Full name"
          />
          <FormField
            keyboardType="numeric"
            maxLength={10}
            name={"phoneNumber"}
            placeholder="Phone number"
          />
          <FormField
            maxLength={255}
            name={"gavelClub"}
            placeholder="Have gavel club?"
          />
          <FormField
            maxLength={255}
            name={"attendingWithChildren"}
            placeholder="Will attend with children?"
          />
          <FormField
            maxLength={255}
            name={"childsName"}
            placeholder="Child's name(s) if attending"
          />
          <FormField
            keyboardType="numeric"
            maxLength={3}
            name={"age"}
            placeholder="Age"
            width={"25%"}
          />
          <Picker
            items={interests}
            name={"activities"}
            numberOfColumns={3}
            PickerItemComponent={PickerItemType}
            placeholder="Activities"
            width="100%"
          />
          <FormField
            maxLength={255}
            name={"dietaryRestrictions"}
            placeholder="Any dietary restrictions?"
          />
          <FormField
            maxLength={255}
            name={"heardAboutFitness"}
            placeholder="How you heard about fitness"
          />
          <FormField
            maxLength={255}
            name={"supportEvent"}
            placeholder="Like to support the event?"
          />
          <FormField
            maxLength={255}
            multiline
            name="comments"
            numberOfLines={3}
            placeholder="Comments"
          />
          <SubmitButton title="Enroll" />
        </Form>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
  },
});
export default ListingEditScreen;
