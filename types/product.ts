interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  variant?: string;
  size?:"S" | "M" | "L" | "XL";
  quantity:0| number;
}

export default Product;