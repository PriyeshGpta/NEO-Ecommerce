import ProductCard from "../../components/ProductCard"
import SpinnerLoader from "../../components/SpinnerLoader";
import { useProducts } from "../../hooks/useProducts"


const Products = () => {
    const { productsData, error, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } = useProducts();

    if (isLoading && !isFetchingNextPage) return <p className='bg-slate-950 text-white pt-6 flex justify-center'>Loading...</p>

    if (error) return <p className="p-6 text-red-400">Error fetching products: {error.response.data.message} </p>

    return (
        <section className="p-6">
            <div className="mx-auto max-w-7xl">
                <div
                    className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4`}
                >
                    {productsData?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
                {
                    hasNextPage && <div className="flex justify-center">
                        <button onClick={fetchNextPage} className="mt-4 cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 active:scale-[0.9]">
                            {isFetchingNextPage ?
                                <SpinnerLoader /> :
                                "Load more"
                            }
                        </button>
                    </div>
                }
            </div>
        </section>
    )
}

export default Products