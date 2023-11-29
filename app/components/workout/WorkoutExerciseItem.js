import { View, FlatList, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign } from "@expo/vector-icons";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";
import ListItemSeperator from "../ListItemSeperator";
import ListItemDeleteAction from "../ListItemDeleteAction";
import AppIconButton from "../AppIconButton";
import Set from "./Set";
import exerciseApi from "../../api/exercise";

export default function WorkoutExerciseItem({
	exercise,
	sets,
	workoutExerciseId,
	workoutId,
	refresh,
	renderRightActions,
	onPress,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<View>
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
					<AppIconButton
						size={40}
						onPress={onPress}>
						<AntDesign
							name="plus"
							color={defaultStyles.colors.white}
							size={15}
						/>
					</AppIconButton>
				</View>
				<View style={styles.setsContainer}>
					<FlatList
						data={sets}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Set
								weight={`${item.weight}kg`}
								reps={item.reps}
								renderRightActions={() => (
									<ListItemDeleteAction
										onPress={() =>
											exerciseApi
												.deleteSetFromWorkoutExercise(
													workoutId,
													workoutExerciseId,
													item.id
												)
												.then(refresh)
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
		flexDirection: "row",
		padding: 15,
		backgroundColor: defaultStyles.colors.white,
		alignItems: "center",
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
	setsContainer: {
		paddingLeft: 20,
	},
	subTitle: {
		color: defaultStyles.colors.medium,
		fontSize: 14,
	},
	title: {
		fontWeight: "500",
	},
});
