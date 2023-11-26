import apiClient from "./client";

const login = async (username, password) =>
	apiClient.post("auth/jwt/create", { username, password });

const getCurrentUser = async () => apiClient.get("auth/users/me");

const authApi = {
	login,
	getCurrentUser,
};

export default authApi;
