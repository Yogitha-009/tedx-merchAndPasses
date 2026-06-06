import Product from "@/types/product";
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/products`
)

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await response.json();

    console.log("Fetched products:", result);

    return result.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default fetchProducts;