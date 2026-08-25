import { Minus, Plus, Trash2 } from "lucide-react";
import useCart from "../../hooks/useCart";

const Cart = () => {
    const { navigate, cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartTotal,
        handlePurchase } = useCart();

    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen bg-slate-950 p-6 text-white">
                <div className="mx-auto max-w-7xl py-20 text-center">
                    <h1 className="text-2xl font-bold">
                        Your cart is empty
                    </h1>

                    <button
                        onClick={() => navigate("/products")}
                        className="cursor-pointer mt-5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium transition hover:bg-indigo-500 active:scale-[0.9]"
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-slate-950 p-6 text-white">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-2xl font-bold">
                    Checkout
                </h1>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div className="space-y-4 lg:col-span-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                            >
                                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-800">
                                    <img
                                        src={item.images?.[0] || item.thumbnail}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="flex justify-between gap-3">
                                        <div>
                                            <p className="text-xs uppercase text-indigo-400">
                                                {item.category}
                                            </p>

                                            <h2 className="mt-1 font-semibold">
                                                {item.title}
                                            </h2>
                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="h-fit text-slate-500 transition hover:text-red-400 cursor-pointer"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-sm text-slate-400">
                                            ${item.price.toFixed(2)}
                                        </span>

                                        <div className="flex items-center rounded-lg border border-slate-700 bg-slate-950">
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="p-2 text-slate-300 hover:bg-slate-800 cursor-pointer"
                                            >
                                                <Minus size={15} />
                                            </button>

                                            <span className="min-w-8 border-x border-slate-700 px-2 py-1 text-center text-sm">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="p-2 text-slate-300 hover:bg-slate-800 cursor-pointer"
                                            >
                                                <Plus size={15} />
                                            </button>
                                        </div>

                                        <span className="font-semibold">
                                            $
                                            {(
                                                item.price *
                                                item.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-fit rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <h2 className="text-lg font-semibold">
                            Order Summary
                        </h2>

                        <div className="mt-5 flex justify-between border-b border-slate-800 pb-4 text-sm text-slate-400">
                            <span>Subtotal</span>

                            <span className="text-white">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <span className="font-semibold">
                                Total
                            </span>

                            <span className="text-xl font-bold">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <button
                            onClick={handlePurchase}
                            className="cursor-pointer mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-[0.98]"
                        >
                            Purchase
                        </button>

                        <button
                            onClick={() => navigate("/products")}
                            className="cursor-pointer mt-3 w-full rounded-lg border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 active:scale-[0.98]"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
