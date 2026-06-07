'use client';

import Product from "@/types/product";
import { Cart } from "@/types/cart";
import React, { useState } from "react";
import { X } from "lucide-react";

type ProductContainerProps = {
  product: Product;
  cart: Cart | null;
  increment: (id: string) => void;
  decrement: (id: string) => void;
};

export default function ProductContainer({
  product,
  cart,
  increment,
  decrement,
}: ProductContainerProps) {
  const [showDetails, setShowDetails] = useState(false);

  const quantity =
    cart?.items.find(
      (item) => item.productId === product._id
    )?.quantity ?? 0;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4 border-b border-stone-200">
        {/* Product Image */}
        <div className="w-full md:w-52 shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <div className="flex justify-between">
            <h1 className="text-lg">{product.name}</h1>

            <p className="font-medium">
              ₹{product.price}
            </p>
          </div>

          <p className="text-stone-500 mt-2">
            {product.description}
          </p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setShowDetails(true)}
              className="
                uppercase
                tracking-[2px]
                text-[11px]
                text-stone-500
              "
            >
              Details
            </button>

            <div
              className="
                flex
                border
                border-stone-300
                gap-2
                w-20
                justify-around
                items-center
              "
            >
              <button
                onClick={() => decrement(product._id)}
              >
                -
              </button>

              <h1>{quantity}</h1>

              <button
                onClick={() => increment(product._id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS MODAL */}
      {showDetails && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >
          <div
            className="
              bg-[#F9F8F6]
              max-w-4xl
              w-full
              shadow-2xl
              border
              border-stone-300
              relative
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDetails(false)}
              className="
                absolute
                top-4
                right-4
                text-stone-500
                hover:text-black
              "
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Image */}
              <div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* Right Content */}
              <div className="p-8">
                <p
                  className="
                    uppercase
                    tracking-[2px]
                    text-[10px]
                    text-stone-400
                  "
                >
                  ARCHIVE REFERENCE
                </p>

                <h2
                  className="
                    text-3xl
                    mt-4
                    text-[#171717]
                  "
                >
                  {product.name}
                </h2>

                <p
                  className="
                    mt-4
                    text-stone-600
                    leading-relaxed
                  "
                >
                  {product.description}
                </p>

                <div className="mt-8">
                  <p
                    className="
                      uppercase
                      tracking-[2px]
                      text-[10px]
                      text-stone-400
                      mb-3
                    "
                  >
                    Specifications
                  </p>

                  <ul className="text-sm text-stone-600 space-y-2">
                    <li>
                      Price: ₹{product.price}
                    </li>

                    {product.size && (
                      <li>
                        Available Size: {product.size}
                      </li>
                    )}

                    {product.type && (
                      <li>
                        Product Type: {product.type}
                      </li>
                    )}

            
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}