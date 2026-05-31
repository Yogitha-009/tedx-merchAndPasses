import Product from "./product"

interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart{
    items: CartItem[];
    subtotal: number;
    discount: number;
    platformFee?: number;
    totalPrice: number;
}

export default Cart;