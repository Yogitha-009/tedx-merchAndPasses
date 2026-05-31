
import mockProducts from "@/lib/mock/mockProducts";
import ProductContainer from "./productContainer";

export default function ProductSheet() {
    return (
        <div>
            {mockProducts.map((product) => (
                <ProductContainer key={product.id} product={product} />
            ))}
        </div>
    );
}