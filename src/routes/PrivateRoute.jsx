import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../app/providers/AuthContextProvider';

const PrivateRoute = () => {
    const { loggedInUser } = useContext(UserContext);
    if (!loggedInUser) return <Navigate to={"/"} />
    return <Outlet />
}

export default PrivateRoute