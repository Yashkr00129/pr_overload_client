import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutNavigator from "./WorkoutNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Tab.Screen
				name={routes.HOME}
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={routes.WORKOUT}
				component={WorkoutNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="dumbbell"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={routes.PROFILE}
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			{/* <Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
			/>
	*/}
		</Tab.Navigator>
	);
};

export default AppNavigator;
