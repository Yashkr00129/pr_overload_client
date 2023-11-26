import apiClient from "./client";

const getAllExercises = async () => apiClient.get("overload/exercises/");

const addExerciseToWorkout = async (workoutId, exercise) =>
	apiClient.post(`overload/workouts/${workoutId}/exercises/`, { exercise });

const exerciseApi = { getAllExercises, addExerciseToWorkout };

export default exerciseApi;
