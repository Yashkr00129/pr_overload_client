import { StyleSheet, Text, View, FlatList } from "react-native";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import workoutApi from "../api/workout";
import ActivityIndicator from "../components/ActivityIndicator";
import WorkoutItem from "../components/workout/WorkoutItem";

export default function WorkoutScreen({ navigation }) {
	const {
		data: workouts,
		loading,
		request: getWorkouts,
	} = useApi(workoutApi.getMyWorkouts);

	useFocusEffect(
		useCallback(() => {
			getWorkouts();
		}, [])
	);

	return (
		<Screen>
			<ActivityIndicator visible={loading} />
			<AppButton
				title={"Add Workout"}
				onPress={() => navigation.navigate(routes.WORKOUT_FORM)}
			/>
			<FlatList
				data={workouts}
				keyExtractor={(workout) => workout.id}
				renderItem={({ item }) => <WorkoutItem workout={item} />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
