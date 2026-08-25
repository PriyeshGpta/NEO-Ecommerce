import { Minus, Plus, ShoppingCart } from "lucide-react";
import useProductDetails from "../../hooks/useProductDetails";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const ProductDetails = () => {

    const {
        product,
        error,
        isLoading,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        cartItem
    } = useProductDetails();

    if (isLoading) return <Loading />;

    if (error) return <ErrorMessage error={error} />;

    return (
        <section className="min-h-screen bg-slate-950 p-6 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="grid overflow-hidden rounded-xl border border-slate-800 bg-slate-900 md:grid-cols-2">

                    <div className="flex items-center justify-center bg-slate-800 p-8">
                        <img
                            src={
                                product.images?.[0] ||
                                product.thumbnail
                            }
                            alt={product.title}
                            className="max-h-[450px] w-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col p-6 md:p-10">
                        <h1 className="text-3xl font-bold">
                            {product.title}
                        </h1>

                        <p className="mt-5 text-base leading-7 text-slate-400">
                            {product.description}
                        </p>

                        <p className="mt-6 text-3xl font-bold">
                            ${product.price.toFixed(2)}
                        </p>

                        {!cartItem ? (
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-[0.98]"
                            >
                                <ShoppingCart size={17} />
                                Add to Cart
                            </button>
                        ) : (
                            <div className="mt-auto flex h-11 items-center overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
                                <button
                                    onClick={() =>
                                        decreaseQuantity(product.id)
                                    }
                                    className="flex h-full w-14 cursor-pointer items-center justify-center text-slate-300 transition hover:bg-slate-800 hover:text-white active:scale-95"
                                >
                                    <Minus size={16} />
                                </button>

                                <span className="flex flex-1 items-center justify-center border-x border-slate-700 text-sm font-semibold">
                                    {cartItem.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        increaseQuantity(product.id)
                                    }
                                    className="flex h-full w-14 cursor-pointer items-center justify-center text-slate-300 transition hover:bg-slate-800 hover:text-white active:scale-95"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
