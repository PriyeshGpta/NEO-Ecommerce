import { useNavigate } from "react-router";
import { CartContext } from "../app/providers/CartContextProvider";
import { useContext } from "react";

const useProductCard = (product) => {
    const navigate = useNavigate();

    const {
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
    } = useContext(CartContext);

    const cartItem = cartItems.find(
        (item) => item.id === product.id
    );

    return {
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        cartItem,
        navigate
    }
}

export default useProductCard;