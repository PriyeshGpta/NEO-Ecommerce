import { Minus, Plus, ShoppingCart } from "lucide-react";
import useProductCard from "../hooks/useProductCard";

const ProductCard = ({ product }) => {
    const { addToCart,
        increaseQuantity,
        decreaseQuantity,
        cartItem,
        navigate } = useProductCard(product);

    return (
        <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-slate-700 hover:bg-slate-800/80">
            <div
                onClick={() =>
                    navigate(`/products/${product.id}`)
                }
                className="aspect-square cursor-pointer overflow-hidden bg-slate-800"
            >
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>

            <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-indigo-400">
                    {product.category}
                </span>

                <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-white">
                    {product.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                    {product.description}
                </p>

                <div className="mt-5">
                    <p className="text-xl font-bold text-white">
                        ${product.price.toFixed(2)}
                    </p>
                </div>

                <div className="mt-3">
                    {!cartItem ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
                        >
                            <ShoppingCart size={17} />
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex h-10 items-center overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
                            <button
                                onClick={() =>
                                    decreaseQuantity(product.id)
                                }
                                className="cursor-pointer flex h-full w-12 items-center justify-center text-slate-300 transition hover:bg-slate-800 hover:text-white active:scale-95"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="flex flex-1 items-center justify-center border-x border-slate-700 text-sm font-semibold text-white">
                                {cartItem.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    increaseQuantity(product.id)
                                }
                                className="cursor-pointer flex h-full w-12 items-center justify-center text-slate-300 transition hover:bg-slate-800 hover:text-white active:scale-95"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
