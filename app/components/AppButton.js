import { Text, StyleSheet, TouchableOpacity } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppButton({
	title,
	onPress,
	color = "primary",
	variant = "contained",
	borderRadius = 25,
}) {
	const containedStyles = {
		backgroundColor: colors[color],
	};

	const outlinedStyles = {
		borderColor: colors[color],
		borderWidth: 1,
		backgroundColor: colors.lightGray,
		color: colors[color],
	};

	const outlinedTextStyles = {
		color: colors[color],
	};

	return (
		<TouchableOpacity
			style={[
				styles.button,
				variant === "contained" && containedStyles,
				variant === "outlined" && outlinedStyles,
				{ borderRadius },
			]}
			onPress={onPress}>
			<Text style={[styles.text, variant === "outlined" && outlinedTextStyles]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: defaultStyles.colors.primary,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		marginVertical: 10,
	},
	text: {
		color: defaultStyles.colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
