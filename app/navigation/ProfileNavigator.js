import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

import ManageCustomExercisesScreen from "../screens/Exercise/ManageCustomExercisesScreen";
import CreateCustomExerciseScreen from "../screens/Exercise/CreateCustomExerciseScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.PROFILE}
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={routes.EXERCISES}
				component={ManageCustomExercisesScreen}
			/>
			<Stack.Screen
				name={routes.CREATE_CUSTOM_EXERCISE}
				component={CreateCustomExerciseScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProfileNavigator;
