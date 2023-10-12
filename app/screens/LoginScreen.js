import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppIconButton from "../components/AppIconButton";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<AppIconButton color="light">
				<Ionicons
					name="arrow-back"
					size={24}
					color={colors.primary}
				/>
			</AppIconButton>
			<Text style={styles.heading}>Welcome Back!</Text>
			<Text style={styles.subHeading}>
				Login below or{" "}
				<Text
					style={styles.underlined}
					onPress={() => {
						console.log("Navigating ");
						navigation.navigate(routes.REGISTER);
					}}>
					create an account
				</Text>
			</Text>
			<AppForm
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}>
				<View style={styles.inputContainer}>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						keyboardType="email-address"
						name="email"
						placeholder="Email"
						textContentType="emailAddress"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Password"
						secureTextEntry
						textContentType="password"
					/>
				</View>
				<SubmitButton title={"Login"} />
				<Text
					style={[
						{
							textDecorationLine: "underline",
							textAlign: "center",
						},
						styles.subHeading,
					]}>
					Forgot Password
				</Text>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	heading: {
		color: colors.primary,
		fontSize: 32,
		fontWeight: "800",
		marginTop: 16,
	},
	subHeading: {
		color: colors.primary,
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 10,
	},
	inputContainer: {
		marginTop: 20,
		flexGrow: 1,
	},
	underlined: { textDecorationLine: "underline" },
});
