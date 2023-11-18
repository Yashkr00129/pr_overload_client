import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import useAuth from "../auth/useAuth";

export default function ProfileScreen() {
	const { logOut } = useAuth();
	return (
		<Screen style={styles.container}>
			<AppButton
				title="Log Out"
				variant="contained"
				onPress={logOut}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});