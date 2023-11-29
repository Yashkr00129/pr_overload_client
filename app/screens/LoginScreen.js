import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppIconButton from "../components/AppIconButton";

import routes from "../navigation/routes";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { ErrorMessage } from "../components/forms";

const validationSchema = Yup.object().shape({
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
	const { logIn } = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ username, password }) => {
		const result = await authApi.login(username, password);
		const accessToken = result.data.access;
		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);
		console.log("Access Token - ", accessToken);
		logIn(accessToken);
	};

	return (
		<Screen>
			<AppIconButton color="lightGray">
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
							navigation.navigate(routes.REGISTER);
						}}>
						create an account
					</Text>
				</Text>
			<AppForm
				initialValues={{ username: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<View style={styles.inputContainer}>
					<ErrorMessage
						error="Invalid email and/or password."
						visible={loginFailed}
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						name="username"
						placeholder="Username"
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
