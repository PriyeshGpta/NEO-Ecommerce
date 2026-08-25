import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/public/Login";
import PrivateLayout from '../layouts/PrivateLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Products from "../pages/private/Products";
import Cart from "../pages/private/Cart";
import ProductDetails from "../pages/private/ProductDetails";
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
        path: "/products",
        element: <PrivateRoute />,
        children: [
            {
                path: "",
                element: <PrivateLayout />,
                children: [
                    {
                        path: "",
                        element: <Products />
                    },
                    {
                        path: ":id",
                        element: <ProductDetails />
                    },
                    {
                        path: "cart",
                        element: <Cart />
                    },
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