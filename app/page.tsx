'use client';

import { useEffect, useState } from 'react';
import CartSidebar from '@/components/cart/cartSidebar';
import Navbar from '@/components/layout/Navbar';
import Products from './products/page';

import Product from '@/types/product';
import { CartItem } from '@/types/cart';

import mockProducts from '@/lib/mock/mockProducts';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(mockProducts);
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

  const increment = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };

  const decrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(
                0,
                product.quantity - 1
              ),
            }
          : product
      )
    );
  };

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