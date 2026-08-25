import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/productsApi";
import { useParams } from "react-router";
import { CartContext } from "../app/providers/CartContextProvider";
import { useContext } from "react";

const useProductDetails = () => {
    const { id } = useParams();
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        addToCart
    } = useContext(CartContext);

    const {
        data: product,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id,
        refetchOnWindowFocus: false,
    });

    const cartItem = cartItems.find(
        (item) => item.id === product?.id
    );

    return {
        product,
        error,
        isLoading,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        cartItem
    };
}

export default useProductDetails