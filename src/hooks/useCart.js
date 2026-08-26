import { useNavigate } from 'react-router';
import { CartContext } from '../app/providers/CartContextProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const useCart = () => {
    const navigate = useNavigate();

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartTotal,
        clearCart,
        cartCount
    } = useContext(CartContext);

    const handlePurchase = () => {
        clearCart();
        toast.success("Order placed successfully")
        navigate("/products");
    };

    return {
        navigate,
        handlePurchase,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartTotal,
        cartCount
    }
}

export default useCart;