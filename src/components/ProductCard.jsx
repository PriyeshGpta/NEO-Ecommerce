const ProductCard = ({ product }) => {
    return (
        <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-slate-700 hover:bg-slate-800/80">
            <div className="aspect-square overflow-hidden bg-slate-800">
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

                <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                        ${product.price.toFixed(2)}
                    </span>

                    <button className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 active:scale-[0.9]">
                        View
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard