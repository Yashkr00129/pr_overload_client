import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Workout Name"),
});

export default function CreateWorkoutScreen() {
	const handleSubmit = (values) => {
		console.log(values);
		// First create the workout, then send the user to the page for WorkoutDetails
	};

	return (
		<Screen>
			<AppForm
				initialValues={{
					name: "",
				}}
				onSubmit={handleSubmit}>
				<AppFormField
					name="name"
					placeholder="Enter Workout Name"
				/>
				<SubmitButton title="Create" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({});
