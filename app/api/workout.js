import apiClient from "./client";

const getMyWorkouts = () => apiClient.get("overload/workouts/");

const createWorkout = ( name ) =>
	apiClient.post("overload/workouts/", { name });

export default workoutApi = { getMyWorkouts, createWorkout };
