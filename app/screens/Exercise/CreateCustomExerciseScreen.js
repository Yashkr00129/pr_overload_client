import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import exerciseApi from "../../api/exercise";

const exerciseTypes = [
	{ label: "Compound", value: "C" },
	{ label: "Isolation", value: "I" },
];

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	type: Yup.object().required().nullable().label("Type"),
});

export default function CreateCustomExerciseScreen({ route, navigation }) {
	const handleSubmit = async (values) => {
		const {
			name,
			type: { value: type },
		} = values;

		exerciseApi.createCustomExercise({ name, type });
		navigation.goBack();
	};

	return (
		<Screen stacked={true}>
			<AppForm
				initialValues={{
					name: "",
					type: null,
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<AppFormField
					name="name"
					placeholder="Name"
				/>
				<AppFormPicker
					items={exerciseTypes}
					name="type"
					placeholder="Exercise Type"
					width="50%"
				/>
				<SubmitButton title="Create" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({});
