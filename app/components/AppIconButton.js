import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "../config/styles";

export default function AppIconButton({
	children,
	onPress,
	color = "primary",
	size = 50,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					backgroundColor: defaultStyles.colors[color],
					width: size,
					height: size,
				},
			]}
			onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: defaultStyles.colors.primary,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		marginVertical: 10,
	},
	text: {
		color: defaultStyles.colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
