import apiClient from "./client";

const getMyWorkouts = async () => apiClient.get("overload/workouts/");

const createWorkout = async (name) =>
	apiClient.post("overload/workouts/", { name });

const deleteWorkout = async (id) =>
	apiClient.delete(`overload/workouts/${id}/`);

const workoutApi = { getMyWorkouts, createWorkout, deleteWorkout };

export default workoutApi;
