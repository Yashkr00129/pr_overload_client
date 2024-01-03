import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList } from "react-native";

import routes from "../../navigation/routes";
import useAuth from "../../auth/useAuth";
import defaultStyles from "../../config/styles";

import Screen from "../../components/Screen";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemSeperator from "../../components/ListItemSeperator";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const menuItems = [
	{
		title: " Manage Custom Exercises",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: defaultStyles.colors.primary,
		},
		route: routes.EXERCISES,
	},
];

export default function ProfileScreen({ navigation }) {
	const { user, logOut } = useAuth();
	return (
		<GestureHandlerRootView>
			<Screen style={styles.screen}>
				<ListItem
					title={user.email}
					subTitle={user.username}
					IconComponent={
						<Icon
							name="account"
							backgroundColor={colors.primary}
						/>
					}
				/>
				<ListItem
					title={"Manage Custom Exercises"}
					IconComponent={
						<Icon
							name={"format-list-bulleted"}
							backgroundColor={defaultStyles.colors.primary}
						/>
					}
					onPress={() => navigation.navigate(routes.EXERCISES)}
				/>

				<ListItem
					title="Log Out"
					onPress={logOut}
					IconComponent={
						<Icon
							name="logout"
							backgroundColor="#ffe66d"
						/>
					}
				/>
			</Screen>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	profileInfoContainer: {
		padding: 20,
	},
	profileInfoHeading: {
		fontSize: 15,
	},
	screen: {
		paddingHorizontal: 0,
		// backgroundColor: defaultStyles.colors.lightGray,
	},
});
