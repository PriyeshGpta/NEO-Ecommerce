import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../app/providers/AuthContextProvider";
import { toast } from "react-toastify";
import { getLoggedInUser, loginUser } from "../api/authApi";

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setLoggedInUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange'
    })

    const onSubmitLogin = async (values) => {
        setIsLoading(true);
        try {
            const response = await loginUser(values);
            const { accessToken, refreshToken, ...rest } = response;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            setLoggedInUser({ ...rest });
            toast.success("Logged in successfully")
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }

    // React state loggedInUser in context resets on refresh.
    // This function calls the current-logged-in user api to get current-logged-in user information and puts the user back into React state,
    // ,so the app remembers that the user is still logged in and do not logout the user when we refresh the page after logging in.
    // In computer science, hydrate means take that information saved somewhere, such as localStorage, cookies, a database, or server session and populate the application's current state.
    const hydrateUser = async () => {
        setIsLoading(true);
        try {
            const response = await getLoggedInUser();
            setLoggedInUser(response)
        } catch (error) {
            console.log("Error hydrating user: ", error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleLogout = () => {
        localStorage.clear();
        setLoggedInUser(null);
        toast.success("Logged out successfully")
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmitLogin,
        handleShowPassword,
        showPassword,
        handleLogout,
        isLoading,
        hydrateUser
    }
}