import {jwtDecode} from "jwt-decode";

export const getUsername = () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    return decodedToken.sub;
}