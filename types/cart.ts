import Product from "./product"

export interface CartItem {
    productId:string
    quantity: number;
}

export interface Cart{
    items: CartItem[];
    subtotal: number;
    discount: number;
    platformFee?: number;
    totalPrice: number;
}