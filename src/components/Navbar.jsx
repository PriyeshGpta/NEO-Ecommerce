import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { handleLogout } = useAuth();
    const { cartItems } = useCart();

    const navItems = [
        { name: "Products", path: "/products" },
        { name: "Cart", path: "/products/cart" },
    ];

    return (
        <nav className="border-b border-slate-800 bg-slate-950/80">
            <div className="max-w-7xl m-auto flex h-16 items-center justify-between px-6">
                <NavLink
                    to="/products"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Ecommerce
                </NavLink>

                <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/60 p-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-2 text-sm font-medium transition-all ${isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                                }`
                            }
                        >
                            {item.name}

                            {item.name === "Cart" && cartItems.length > 0 && (
                                <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">
                                    {cartItems?.length}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div>
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:border-red-500/30 hover:bg-red-500/20 hover:text-red-300 active:scale-[0.9]"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
