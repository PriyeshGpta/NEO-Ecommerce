import { createContext, useState } from "react"

// Create a context
export const UserContext = createContext();

// Make a ProviderWrapper which will wrap the entire App, and will share the data across all components.
export const AuthContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </UserContext.Provider>)
}