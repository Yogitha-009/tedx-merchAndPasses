interface Product {
  _id: string;
  title: string;
  slug?: string;
  type?: string;
  price: number;
  currency?: string;
  stock?: number;
  isUnlimited?: boolean;
  description: string;
  imageUrl: string;
  variant?: string;
  size?:"S" | "M" | "L" | "XL";
  quantity:0|number;
}

export default Product;