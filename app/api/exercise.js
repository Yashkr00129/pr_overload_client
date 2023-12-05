import apiClient from "./client";

const getAllExercises = async () => apiClient.get("overload/exercises/");

const addExerciseToWorkout = async (workoutId, exercise) =>
	apiClient.post(`overload/workouts/${workoutId}/exercises/`, { exercise });

const getExercisesByWorkout = async (workoutId) =>
	apiClient.get(`overload/workouts/${workoutId}/exercises/`);

const deleteExerciseFromWorkout = async (workoutId, exerciseId) =>
	apiClient.delete(`/overload/workouts/${workoutId}/exercises/${exerciseId}/`);

const addSetToWorkoutExercise = async (workoutId, exerciseId, payload) =>
	apiClient.post(
		`/overload/workouts/${workoutId}/exercises/${exerciseId}/sets/`,
		payload
	);

const deleteSetFromWorkoutExercise = async (workoutId, exerciseId, setId) =>
	apiClient.delete(
		`/overload/workouts/${workoutId}/exercises/${exerciseId}/sets/${setId}/`
	);

const createCustomExercise = async (payload) =>
	apiClient.post("/overload/exercises/", payload);

const exerciseApi = {
	getAllExercises,
	addExerciseToWorkout,
	getExercisesByWorkout,
	deleteExerciseFromWorkout,
	addSetToWorkoutExercise,
	deleteSetFromWorkoutExercise,
	createCustomExercise,
};

export default exerciseApi;
