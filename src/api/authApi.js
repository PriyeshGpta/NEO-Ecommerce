import api from "../config/api";

export const loginUser = (credentials) => {
    return api.post("/auth/login", credentials);
};

export const getLoggedInUser = () => {
    return api.get("/auth/me");
}