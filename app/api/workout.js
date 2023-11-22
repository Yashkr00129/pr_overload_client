import apiClient from "./client";

const getMyWorkouts = () => apiClient.get("overload/workouts/");

export default workoutApi = { getMyWorkouts };
