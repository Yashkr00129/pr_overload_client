import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

export default function WorkoutScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<AppButton
				title={"Add Workout"}
				onPress={() => navigation.navigate(routes.WORKOUT_FORM)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
