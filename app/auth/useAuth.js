import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import authApi from "../api/auth";

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logOut = () => {
		setUser(null);
		authStorage.removeToken();
	};

	const logIn = async (token) => {
		authStorage.storeToken(token);

		const res = await authApi.getCurrentUser();
		setUser(res.data);
	};

	return { user, setUser, logOut, logIn };
};
