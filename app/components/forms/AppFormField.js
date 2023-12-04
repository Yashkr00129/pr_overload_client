import { StyleSheet, Text, View } from "react-native";

import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...others }) {
	const { setFieldTouched, setFieldValue, values, errors, touched } =
		useFormikContext();

	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				{...others}
			/>
			<ErrorMessage
				error={errors[name]}
				visible={touched[name]}
			/>
		</>
	);
}

const styles = StyleSheet.create({});
