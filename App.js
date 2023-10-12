import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
	return (
		<NavigationContainer
			ref={navigationRef}
			theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
