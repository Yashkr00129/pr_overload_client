import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

import ManageCustomExercisesScreen from "../screens/Exercise/ManageCustomExercisesScreen";
import CreateCustomExerciseScreen from "../screens/Exercise/CreateCustomExerciseScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";

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
			<Stack.Screen
				name={routes.EDIT_PROFILE}
				component={EditProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProfileNavigator;
