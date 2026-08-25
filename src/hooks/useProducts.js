import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productsApi"


export const useProducts = () => {
    let limit = 8;
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching: isLoading,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam }) => getAllProducts(pageParam, limit),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            let skip = pages?.length * limit

            if (skip >= lastPage?.total)
                return undefined;

            return skip;
        },
        refetchOnWindowFocus: false,
    })

    const productsData = data?.pages?.flatMap((res) => res?.products)

    return { productsData, error, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage }
}