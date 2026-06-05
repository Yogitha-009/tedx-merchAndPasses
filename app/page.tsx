'use client';

import { useEffect, useState } from 'react';
import CartSidebar from '@/components/cart/cartSidebar';
import Navbar from '@/components/layout/Navbar';
import Products from './products/page';
import fetchProducts from '@/lib/mock/mockProducts';
import Product from '@/types/product';
import { CartItem } from '@/types/cart';
import { q } from 'motion/react-client';


export default function Home() {
  const dummyUserId="66b1f4a9c8d3e7f123456789"
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

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

  // Save products + update cart whenever products change
  useEffect(() => {
    if (products.length === 0) return;

    localStorage.setItem(
      'products',
      JSON.stringify(products)
    );

    const selectedProducts = products.filter(
      (product) => product.quantity > 0
    );

    const items: CartItem[] = selectedProducts.map(
      (product) => ({
        product,
        quantity: product.quantity,
      })
    );

    setCartItems(items);
  }, [products]);

// get cart products from backend
async function getCart(){
  const response=await fetch("http://localhost:5001/cart?:dummyUserId")
  const data=await response.json();
  console.log(data)
}


// add new product to cart
  async function setcartProducts(product: Product) {
    const response= await fetch(
      "http://localhost:5001/cart/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "66b1f4a9c8d3e7f123456789",
          productId: product._id,
          quantity: product.quantity,
          productType: product.type,
          selectedSize: product.size,
        })
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save cart products");
    }
    else {console.log("Cart products saved successfully");
    }
  }

// update cart products whenever cartItems change
async function updateCart(product: Product) {
  const response= await fetch(
    'http://localhost:5001/cart/update',
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "66b1f4a9c8d3e7f123456789",
        productId: product._id,
        quantity: product.quantity
        })
      }
  );

  if (!response.ok) {
    throw new Error("Failed to update cart products");
  }
  else {
    console.log("Cart products updated successfully");
  }
}

  // const increment = (product:Product) => {
  //   const cart=getCart();
  //   const cartitems=cart.data.items;
  //   cartitems.map(item:cartItems)=>
  //     item._id ===products._id
  //   ?{updateCart(item)}
  //   :{setcartProducts(item)}
  // };

  // const decrement = (id: string) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product._id === id
  //         ? {
  //             ...product,
  //             quantity: Math.max(
  //               0,
  //               product.quantity - 1
  //             ),
  //           }
  //         : product
  //     )
  //   );
  // };

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Products Section */}
          <div className="flex-1 min-w-0">
            <Products
              products={products}
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
            <CartSidebar cartItems={cartItems} />
          </div>

        </div>
      </div>
    </div>
  );
}