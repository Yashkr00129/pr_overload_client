import { View, FlatList, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";
import ListItemSeperator from "../ListItemSeperator";
import ListItemDeleteAction from "../ListItemDeleteAction";
import Set from "./Set";

export default function WorkoutExerciseItem({
	exercise,
	sets,
	workoutExerciseId,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<View style={styles.container}>
				<View style={styles.detailsContainer}>
					<AppText
						style={styles.title}
						numberOfLines={1}>
						{exercise.name}
					</AppText>
					<AppText
						style={styles.subTitle}
						numberOfLines={2}>
						{(exercise.type === "C" && "Compound") ||
							(exercise.type === "I" && "Isolation")}
					</AppText>
				</View>
				<View>
					<FlatList
						data={sets}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Set
								weight={`${item.weight}kg`}
								reps={`${item.reps}reps`}
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
				</View>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: defaultStyles.colors.white,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
	subTitle: {
		color: defaultStyles.colors.medium,
		fontSize: 14,
	},
	title: {
		fontWeight: "500",
	},
});
