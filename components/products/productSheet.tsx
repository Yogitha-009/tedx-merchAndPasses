import ProductContainer from "./productContainer";
import Product from "@/types/product";

type ProductSheetProps = {
    products: Product[];
    increment: (id: string) => void;
    decrement: (id: string) => void;
};

export default function ProductSheet({
    products,
    increment,
    decrement,
}: ProductSheetProps) {
    return (
        <div>
            {products.map((product) => (
                <ProductContainer
                    key={product._id}
                    product={product}
                    increment={increment}
                    decrement={decrement}
                />
            ))}
        </div>
    );
}