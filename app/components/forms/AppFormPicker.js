import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
	items,
	name,
	placeholder,
	width,
	PickerItemComponent,
	numColumns,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	return (
		<>
			<AppPicker
				items={items}
				onSelect={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				numColumns={numColumns}
			/>
			<ErrorMessage
				error={errors[name]}
				visible={touched[name]}
			/>
		</>
	);
}

const styles = StyleSheet.create({});
