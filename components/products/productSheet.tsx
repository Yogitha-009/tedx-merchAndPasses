import ProductContainer from "./productContainer";
import Product from "@/types/product";
import { Cart } from "@/types/cart";

type ProductSheetProps = {
    products: Product[];
    cart:Cart|null
    increment: (id: string) => void;
    decrement: (id: string) => void;
};

export default function ProductSheet({
    products,
    cart,
    increment,
    decrement,
}: ProductSheetProps) {
    return (
        <div>
            {products.map((product) => (
                <ProductContainer
                    key={product._id}
                    product={product}
                    cart={cart}
                    increment={increment}
                    decrement={decrement}
                />
            ))}
        </div>
    );
}