import { StyleSheet, Text, View, FlatList } from "react-native";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import routes from "../../navigation/routes";
import useApi from "../../hooks/useApi";
import workoutApi from "../../api/workout";
import ActivityIndicator from "../../components/ActivityIndicator";
import WorkoutItem from "../../components/workout/WorkoutItem";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeperator from "../../components/ListItemSeperator";

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
				onPress={() => navigation.navigate(routes.WORKOUT_CREATE)}
			/>
			<FlatList
				data={workouts}
				keyExtractor={(workout) => workout.id}
				renderItem={({ item }) => (
					<ListItem
						title={item.name}
						subTitle={new Date(item.date_created).toLocaleDateString()}
						onPress={() => navigation.navigate(routes.WORKOUT_EDIT, item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() =>
									workoutApi.deleteWorkout(item.id).then(getWorkouts)
								}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeperator />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
