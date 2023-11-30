import apiClient from "./client";

const login = async (username, password) =>
	apiClient.post("auth/jwt/create/", { username, password });

const registerUser = async (payload) => apiClient.post("auth/users/", payload);

const getCurrentUser = async () => apiClient.get("auth/users/me");

const authApi = {
	login,
	getCurrentUser,
	registerUser,
};

export default authApi;
