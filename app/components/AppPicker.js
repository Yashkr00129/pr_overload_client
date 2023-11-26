import {
	View,
	TextInput,
	StyleSheet,
	Platform,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../config/colors";

export default function AppPicker({
	icon,
	onSelect,
	selectedItem,
	PickerItemComponent = PickerItem,
	items,
	numColumns = 1,
	placeholder,
	width = "100%",
}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal
				visible={modalVisible}
				animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setModalVisible(false);
									onSelect(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGray,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
	text: {
		flex: 1,
	},
});
