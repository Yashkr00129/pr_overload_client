import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import Screen from "../../components/Screen";
import exerciseApi from "../../api/exercise";

const validationSchema = Yup.object().shape({
	weight: Yup.number().required().label("Weight"),
	reps: Yup.number().required().label("Reps"),
});

export default function AddSetToWorkoutExerciseScreen({ route, navigation }) {
	// Make a form here and allow the user to add sets to the exercise.
	const { workout, exercise } = route.params;

	const handleSubmit = async (values) => {
		await exerciseApi.addSetToWorkoutExercise(workout.id, exercise.id, values);
		navigation.goBack();
	};

	return (
		<Screen stackDisplay={true}>
			<AppForm
				initialValues={{
					weight: "",
					reps: "",
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="weight"
					placeholder="Weight"
					width={120}
				/>
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="reps"
					placeholder="Reps"
					width={120}
				/>
				<SubmitButton title="Create" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({});
