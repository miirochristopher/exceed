import React from "react";
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
  type: Yup.string().label("Event"),
  phoneNumber: Yup.string().required().min(10).label("Phone number"),
  gavelierClub: Yup.string().label("Have gavel club?"),
  attendingWithChildren: Yup.string()
    .required()
    .label("Attending with children?"),
  ChildsName: Yup.string().label("Child's or Children name(s)"),
  age: Yup.number().min(1).label("Age"),
  activities: Yup.object().required().label("Activities"),
  dietaryRestrictions: Yup.string().label("Any dietary restrictions?"),
  heardAboutFitness: Yup.string().label("Heard about fitness?"),
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

  const handleSubmit = async (enrollment) => {
    const result = await clubEventsAPI.createEnrollment(enrollment);
    if (!result.ok) return alert("Could not save enrollment!");
    console.log(result);
    alert("Enrollment was successful!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Screen style={styles.container}>
        <Form
          initialValues={{
            fullName: "",
            type: "",
            phoneNumber: "",
            gavelierClub: "",
            attendingWithChildren: "",
            ChildsName: "",
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
            name={"fullName"}
            placeholder="Full name"
          />
          <FormField
            maxLength={255}
            name={"type"}
            value={enrollInto.name}
            editable={null}
          />
          <FormField
            maxLength={12}
            name={"phoneNumber"}
            placeholder="Phone number"
          />
          <FormField
            maxLength={255}
            name={"gavelierClub"}
            placeholder="Have gavel club?"
          />
          <FormField
            maxLength={255}
            name={"attendingWithChildren"}
            placeholder="With children?"
          />
          <FormField
            maxLength={255}
            name={"ChildsName"}
            placeholder="Child's name(s)"
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
            placeholder="Heard about fitness?"
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
