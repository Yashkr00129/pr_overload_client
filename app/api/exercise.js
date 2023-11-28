import apiClient from "./client";

const getAllExercises = async () => apiClient.get("overload/exercises/");

const addExerciseToWorkout = async (workoutId, exercise) =>
	apiClient.post(`overload/workouts/${workoutId}/exercises/`, { exercise });

const getExercisesByWorkout = async (workoutId) =>
	apiClient.get(`overload/workouts/${workoutId}/exercises/`);

const deleteExerciseFromWorkout = async (workoutId, exerciseId) =>
	apiClient.delete(`/overload/workouts/${workoutId}/exercises/${exerciseId}/`);

const exerciseApi = {
	getAllExercises,
	addExerciseToWorkout,
	getExercisesByWorkout,
	deleteExerciseFromWorkout,
};

export default exerciseApi;
