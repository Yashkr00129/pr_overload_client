import { StyleSheet, Text, View } from "react-native";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import routes from "../../navigation/routes";
import useApi from "../../hooks/useApi";
import exerciseApi from "../../api/exercise";
import ActivityIndicator from "../../components/ActivityIndicator";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList } from "react-native";
import ListItemSeperator from "../../components/ListItemSeperator";
import ListItem from "../../components/ListItem";
import WorkoutExerciseItem from "../../components/workout/WorkoutExerciseItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

export default function EditWorkoutScreen({ route, navigation }) {
	const workout = route.params;

	const {
		request: loadExercises,
		loading,
		data: exercises,
	} = useApi(exerciseApi.getExercisesByWorkout);

	useFocusEffect(
		useCallback(() => {
			loadExercises(workout.id);
		}, [workout.id])
	);

	// Here i want to be able to add exercises to the workout and delete exercises.
	// Then i want to be able to add sets to the exercises added.

	return (
		<Screen>
			<ActivityIndicator visible={loading} />
			<View style={styles.headingContainer}>
				<AppText style={styles.heading}>{workout?.name}</AppText>
			</View>
			<FlatList
				data={exercises}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<WorkoutExerciseItem
						workoutExerciseId={item.id}
						workoutId={workout.id}
						exercise={item.exercise}
						refresh={loadExercises}
						sets={item.sets}
						onPress={() =>
							navigation.navigate(routes.ADD_SET_TO_WORKOUT, {
								exercise: item,
								workout,
							})
						}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() =>
									exerciseApi
										.deleteExerciseFromWorkout(workout.id, item.id)
										.then(() => loadExercises(workout.id))
								}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeperator />}
			/>
			<AppButton
				title="Add Exercise"
				onPress={() =>
					navigation.navigate(routes.ADD_EXERCISE_TO_WORKOUT, workout)
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	headingContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray,
		padding: 20,
		paddingTop: 0,
	},
	heading: {
		fontSize: 24,
		fontWeight: "800",
		color: colors.primary,
	},
});
