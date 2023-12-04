import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import WorkoutScreen from "../screens/Workout/WorkoutScreen";
import CreateWorkoutScreen from "../screens/Workout/CreateWorkoutScreen";
import EditWorkoutScreen from "../screens/Workout/EditWorkoutScreen";
import AddExerciseToWorkoutScreen from "../screens/Workout/AddExerciseToWorkoutScreen";
import AddSetToWorkoutExerciseScreen from "../screens/Workout/AddSetToWorkoutExerciseScreen";

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
				name={routes.WORKOUT_CREATE}
				component={CreateWorkoutScreen}
			/>
			<Stack.Screen
				name={routes.WORKOUT_EDIT}
				component={EditWorkoutScreen}
			/>
			<Stack.Screen
				name={routes.ADD_EXERCISE_TO_WORKOUT}
				component={AddExerciseToWorkoutScreen}
			/>
			<Stack.Screen
				name={routes.ADD_SET_TO_WORKOUT}
				component={AddSetToWorkoutExerciseScreen}
			/>

		</Stack.Navigator>
	);
};

export default WorkoutNavigator;
