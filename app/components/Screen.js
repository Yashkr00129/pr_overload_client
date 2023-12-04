import { StyleSheet, SafeAreaView, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'


export default function Screen({ children, stackDisplay = false, style }) {
	return (
		<SafeAreaView
			style={[styles.screen, style, stackDisplay && { paddingTop: 0 }]}>
			<View style={[styles.view, style]}>{children}</View>
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		paddingHorizontal: 10,
		height: "100%",
	},
	view: {
		flex: 1,
	},
});