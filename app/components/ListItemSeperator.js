import { View, Text, StyleSheet } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function ListItemSeperator() {
	return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
	seperator: {
		width: "100%",
		height: 1,
		backgroundColor: defaultStyles.colors.lightGray,
	},
});
