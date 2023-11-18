import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log("Error storing the auth token", error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log("Error getting the auth token", error);
	}
};

const getUser = async () => {
	const token = await getToken();

	if (token) {
		const res = await authApi.getCurrentUser();
		console.log(res.data);
		return res.data;
	}

	return null;
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("Error removing the auth token", error);
	}
};

export default authStorage = {
	getToken,
	storeToken,
	removeToken,
	getUser,
};
