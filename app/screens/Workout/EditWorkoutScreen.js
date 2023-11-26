import { StyleSheet, Text, View } from "react-native";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import routes from "../../navigation/routes";

export default function EditWorkoutScreen({ route, navigation }) {
	const workout = route.params;

	// Here i want to be able to add exercises to the workout and delete exercises.
	// Then i want to be able to add sets to the exercises added.

	return (
		<Screen>
			<View>
				<AppText style={styles.heading}>{workout.name}</AppText>
			</View>
			<AppButton
				title="Add Exercise"
				color="danger"
				onPress={() =>
					navigation.navigate(routes.ADD_EXERCISE_TO_WORKOUT, workout)
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: colors.black,
	},
});
