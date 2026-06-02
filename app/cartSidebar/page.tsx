import { CartItem } from "@/types/cart";
import CheckoutCoordinates from "../checkoutCoordinates/page";
import Link from "next/link";

type CartSidebarProps = {
    cartItems: CartItem[];
};

export default function CartSidebar({ cartItems }: CartSidebarProps) {
    return (
        <div>
            <h1>welcome to your cart</h1>
            <h2>your cart is currently empty</h2>
            {cartItems.length > 0 && (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.product.title}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
            <Link href="/checkoutCoordinates">Continue to Checkout</Link>
        </div>
    );
}