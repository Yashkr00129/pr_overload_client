import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import WorkoutScreen from "../screens/WorkoutScreen";
import CreateWorkoutScreen from "../screens/CreateWorkoutScreen";

const Stack = createStackNavigator();

const WorkoutNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.WORKOUT}
				component={WorkoutScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={routes.WORKOUT_FORM}
				component={CreateWorkoutScreen}
			/>
		</Stack.Navigator>
	);
};

export default WorkoutNavigator;
