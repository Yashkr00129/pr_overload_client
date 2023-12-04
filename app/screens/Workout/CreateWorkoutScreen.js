import { StyleSheet, Text, View } from "react-native";

import * as Yup from "yup";

import Screen from "../../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import workoutApi from "../../api/workout";
import routes from "../../navigation/routes";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(5).label("Workout Name"),
});

export default function CreateWorkoutScreen({ navigation }) {
	const handleSubmit = async (values) => {
		await workoutApi.createWorkout(values.name);
		navigation.navigate(routes.WORKOUT);
	};

	return (
		<Screen>
			<AppForm
				initialValues={{
					name: "",
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<AppFormField
					name="name"
					placeholder="Enter Workout Name"
				/>
				<SubmitButton title="Create" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({});
