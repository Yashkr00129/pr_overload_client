import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useApi from "../../hooks/useApi";
import exerciseApi from "../../api/exercise";
import ActivityIndicator from "../../components/ActivityIndicator";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList } from "react-native";
import ListItemSeperator from "../../components/ListItemSeperator";
import ListItem from "../../components/ListItem";

export default function AddExerciseToWorkoutScreen({ route, navigation }) {
	const workout = route.params;

	const {
		request: getExercises,
		data: exercises,
		loading,
	} = useApi(exerciseApi.getAllExercises);

	useFocusEffect(
		useCallback(() => {
			getExercises();
		}, [])
	);

	const addExerciseToWorkout = async (exercise) => {
		const res = await exerciseApi.addExerciseToWorkout(workout.id, exercise.id);
		navigation.goBack();
	};

	return (
		<View>
			<ActivityIndicator visible={loading} />
			<FlatList
				data={exercises}
				keyExtractor={(message) => message.id}
				renderItem={({ item }) => (
					<ListItem
						title={item.name}
						subTitle={
							(item.type === "C" && "Compound") ||
							(item.type === "I" && "Isolation")
						}
						onPress={() => addExerciseToWorkout(item)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeperator />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
