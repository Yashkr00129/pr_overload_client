import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AppText from "../AppText";
import AppIconButton from "../AppIconButton";

import colors from "../../config/colors";
import { TouchableOpacity } from "react-native";

export default function WorkoutItem({ workout, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.detailsContainer}>
					<AppText
						style={{ fontWeight: "bold" }}
						numberOfLines={1}>
						{workout.name}
					</AppText>
					<AppText
						style={{ color: colors.darkGray, fontSize: 14 }}
						numberOfLines={1}>
						{new Date(workout.date_created).toLocaleDateString()}
					</AppText>
				</View>
				<AppIconButton>
					<AntDesign
						name="edit"
						size={24}
						color={colors.white}
					/>
				</AppIconButton>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginBottom: 10,
		borderColor: colors.gray,
		backgroundColor: colors.lightGray,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	detailsContainer: {
		maxWidth: "70%",
	},
});
