import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={8}
			style={styles.background}
			source={require("../assets/background.jpg")}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/logo.png")}
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton
					title="Login"
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<AppButton
					title="Register"
					color="secondary"
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonsContainer: {
		width: "100%",
		padding: 20,
	},
	logo: {
		width: 250,
		height: 250,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
});
