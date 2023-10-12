import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

export default function AppButton({
	title,
	onPress,
	color = "primary",
	variant = "contained",
}) {
	const containedStyles = {
		backgroundColor: colors[color],
	};

	const outlinedStyles = {
		borderColor: colors[color],
		borderWidth: 1,
		backgroundColor: colors.light,
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
		borderRadius: 25,
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
