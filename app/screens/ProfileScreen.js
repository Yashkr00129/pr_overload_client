import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList } from "react-native";

import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import defaultStyles from "../config/styles";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
	{
		title: " Manage Custom Exercises",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: defaultStyles.colors.primary,
		},
		navigate: (navigation) => navigation.navigate(routes.EXERCISES),
	},
	{
		title: "Body Measurements",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: defaultStyles.colors.primary,
		},
	},
];

export default function ProfileScreen({ navigation }) {
	const { user, logOut } = useAuth();
	return (
		<GestureHandlerRootView>
			<Screen style={styles.screen}>
				<View style={styles.container}>
					<ListItem
						title={user.email}
						subTitle={user.username}
					/>
				</View>
				<View style={styles.container}>
					<FlatList
						data={menuItems}
						keyExtractor={(menuItem) => menuItem.title}
						renderItem={({ item }) => (
							<ListItem
								title={item.title}
								IconComponent={
									<Icon
										name={item.icon.name}
										backgroundColor={item.icon.backgroundColor}
									/>
								}
								onPress={() => item.navigate(navigation)}
							/>
						)}
						ItemSeparatorComponent={ListItemSeperator}
					/>
				</View>
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
	screen: {
		paddingHorizontal: 0,
		backgroundColor: defaultStyles.colors.lightGray,
	},
});
