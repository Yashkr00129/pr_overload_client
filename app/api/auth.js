import apiClient from "./client";

const login = (username, password) =>
	apiClient.post("auth/jwt/create", { username, password });

const getCurrentUser = () => apiClient.get("auth/users/me");

export default authApi = {
	login,
	getCurrentUser,
};
