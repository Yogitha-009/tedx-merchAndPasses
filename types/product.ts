interface Product {
  _id: string;
  name: string;
  slug: string;
  type?: string;
  price: number;
  currency?: string;
  stock?: number;
  isUnlimited?: boolean;
  description: string;
  imageUrl: string;
  variant?: string;
  size?:"S" | "M" | "L" | "XL";
  quantity:number;
}

export default Product;