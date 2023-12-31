import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import authStorage from "./app/auth/storage";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	// Disable all warnings.
	console.disableYellowBox = true;

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (!user) return;
		setUser(user);
	};

	if (!isReady) {
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={(error) => console.log(error)}
			/>
		);
	}
	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
			}}>
			<NavigationContainer
				ref={navigationRef}
				theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
