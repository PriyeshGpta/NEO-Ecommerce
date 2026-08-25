import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/public/Login";
import PrivateLayout from '../layouts/PrivateLayout';
import Home from '../pages/private/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import About from "../pages/private/About";
import Products from "../pages/private/Products";
import ContactUs from "../pages/private/ContactUs";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "",
                element: <PublicLayout />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                ]
            },
        ],
    },
    {
        path: "/main",
        element: <PrivateRoute />,
        children: [
            {
                path: "",
                element: <PrivateLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "products",
                        element: <Products />
                    },
                    {
                        path: "contact",
                        element: <ContactUs />
                    }
                ]
            },
        ],
    }
])

const AppRoutes = () => {
    const { hydrateUser, isLoading } = useAuth()

    useEffect(() => {
        hydrateUser();
    }, [])

    if (isLoading) return <p className='h-screen w-screen bg-slate-950 text-white flex items-center justify-center'>Loading...</p>

    return <RouterProvider router={router} />
}

export default AppRoutes