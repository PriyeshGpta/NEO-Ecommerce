import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../app/providers/AuthContextProvider';

const PublicRoute = () => {
    const { loggedInUser } = useContext(UserContext);
    if (loggedInUser) return <Navigate to={"/main"} />
    return <Outlet />
}

export default PublicRoute