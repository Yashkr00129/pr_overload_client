import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import workoutApi from "../api/workout";
import ActivityIndicator from "../components/ActivityIndicator";
import WorkoutItem from "../components/workout/WorkoutItem";

export default function WorkoutScreen({ navigation }) {
	const { data: workouts, loading, request } = useApi(workoutApi.getMyWorkouts);

	console.log(workouts);

	useEffect(() => {
		request();
	}, []);

	return (
		<Screen>
			<ActivityIndicator visible={loading} />
			<AppButton
				title={"Add Workout"}
				onPress={() => navigation.navigate(routes.WORKOUT_FORM)}
			/>
			{workouts.map((workout) => (
				<WorkoutItem workout={workout} />
			))}
		</Screen>
	);
}

const styles = StyleSheet.create({});
