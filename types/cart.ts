import Product from "./product";

export interface CartItem {
    productId:string;
    quantity: number;
    selectedSize?:"S"|"M"|"L"|"XL";
    priceAtPurchase:number;
    productType?:"MERCH"|"TICKET"
}

export interface Cart{
    userId:string;
    items: CartItem[];
    subtotal: number;
    total: number;
    status?:"PENDING"|"DONE";
}