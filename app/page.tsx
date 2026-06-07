'use client';

import { useEffect, useState } from 'react';
import CartSidebar from '@/components/cart/cartSidebar';
import Navbar from '@/components/layout/Navbar';
import Products from './products/page';
import fetchProducts from '@/lib/mock/mockProducts';
import Product from '@/types/product';
import { CartItem ,Cart} from '@/types/cart';

export default function Home() {
  const userId="665f1a2b3c4d5e6f7a8b9c0d";
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
  const loadProducts = async () => {
    const result = await fetchProducts();
    const productsWithQuantity = result.map((product) => ({
      ...product,
      quantity: 0,
    }));

    setProducts(productsWithQuantity);
  };

  loadProducts();
  }, []);

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(products);
    }
  }, []);

  const refreshCart = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart?userId=${userId}`
    );

    const result = await response.json();
    if (result.success) {setCart(result.data);}
  };

  
// cart fetched from the backend
async function getcart(){
  const response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart?userId=${userId}`);
  const data=await response.json()
  return data;
}


useEffect(() => {
  const loadCart = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart?userId=${userId}`
    );

    const result = await response.json();
    if (result.success) {setCart(result.data);}
  };

  loadCart();
}, []);

// add to cart items
async function addToCart(slug:string){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: `${userId}`,
    productId: `${slug}`,
    quantity: 1,
    productType: "MERCH",
    selectedSize: "M",
  }),
});

const data = await response.json();
console.log(data);
}


// update the cart items
async function updateCart(slug:string,quantity:number){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/update`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: `${userId}`,
    productId: `${slug}`,
    quantity: quantity,
  }),
});

const data = await response.json();
console.log(data);
}

// delete the item

async function deleteProduct(slug:string){
  const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/cart/remove/${slug}`,
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: `${userId}`,
    }),
  }
);

const data = await response.json();
console.log(data);
}

// increment function
async function increment(slug:string) {
  const cart = await getcart();
  refreshCart()

if(cart.data==null)
  addToCart(slug)

else{
  const item = cart.data.items.find(
    (item:CartItem) => item.productId === slug
  );

  if (item) {
    // item exists: increment its quantity
    updateCart(slug, item.quantity + 1);
    refreshCart()
    console.log('Product quantity incremented in cart');
  } else {
    // item not in cart: add using the provided id
    addToCart(slug);
    refreshCart()
    console.log('Product added to cart');
  }
}
}

//decrement function
async function decrement(slug:string) {
  const cart = await getcart();
  refreshCart()

  const item = cart.data.items.find(
    (item:CartItem) => item.productId === slug
  );

  if (item) {
    if(item.quantity===1){
      deleteProduct(slug);
      console.log("product deleted successfully");
    }
    else{
      updateCart(slug,item.quantity-1);
      refreshCart()
      console.log("product decreased by one unit")
    }
  } 
  else {
    console.log("Product already not present in the cart");
  }
}


//delete cart
async function deleteCart() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cart/clear`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    }
  );

  const data = await response.json();
  console.log(data);

  await refreshCart();
}

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Products Section */}
          <div className="flex-1 min-w-0">
            <Products
              products={products}
              cart={cart}
              increment={increment}
              decrement={decrement}
            />
          </div>

          {/* Cart Section */}
          <div
            className="
              w-full
              lg:w-[320px]
              lg:shrink-0
            "
          >
            <CartSidebar
            cart={cart ?? {
                        userId,
                        items: [],
                        subtotal: 0,
                        total: 0,
            }
            }
            products={products}
            deleteCart={deleteCart}
/>
          </div>

        </div>
      </div>
    </div>
  );
}