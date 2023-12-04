import { useCallback } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import ActivityIndicator from "../../components/ActivityIndicator";
import ListItemSeperator from "../../components/ListItemSeperator";
import ListItem from "../../components/ListItem";

import useApi from "../../hooks/useApi";
import exerciseApi from "../../api/exercise";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

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
		await exerciseApi.addExerciseToWorkout(workout.id, exercise.id);
		navigation.goBack();
	};

	return (
		<Screen stackDisplay={true}>
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
			<AppButton title={"Add Exercise"} />
		</Screen>
	);
}

const styles = StyleSheet.create({});
