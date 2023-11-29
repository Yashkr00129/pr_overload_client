import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import defaultStyles from "../../config/styles";

export default function Set({
	weight,
	reps,
	image,
	onPress,
	renderRightActions,
	IconComponent,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				onPress={onPress}
				underlayColor={defaultStyles.colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && (
						<Image
							style={styles.image}
							source={image}
						/>
					)}
					<View style={styles.detailsContainer}>
						<AppText
							style={styles.title}
							numberOfLines={1}>
							{weight} *{" "}
							<AppText
								style={styles.subTitle}
								numberOfLines={2}>
								{reps}
							</AppText>
						</AppText>
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						color={defaultStyles.colors.medium}
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: defaultStyles.colors.white,
		alignItems: "center",
	},
	detailsContainer: {
		flexDirection: "row",
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: defaultStyles.colors.medium,
	},
	title: {
		fontWeight: "500",
	},
});
