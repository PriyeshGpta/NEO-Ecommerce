import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../app/providers/AuthContextProvider';

const PublicRoute = () => {
    const { loggedInUser } = useContext(UserContext);
    if (loggedInUser) return <Navigate to={"/products"} />
    return <Outlet />
}

export default PublicRoute