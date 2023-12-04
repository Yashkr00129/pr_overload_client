import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";
import CreateProfileScreen from "../screens/CreateProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name={"Welcome"}
				component={WelcomeScreen}
			/>

			<Stack.Screen
				name={routes.LOGIN}
				component={LoginScreen}
			/>
			<Stack.Screen
				name={routes.REGISTER}
				component={RegisterScreen}
			/>
			<Stack.Screen
				name={routes.CREATE_PROFILE}
				component={CreateProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
