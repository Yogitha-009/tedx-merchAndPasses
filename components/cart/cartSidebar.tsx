'use client';

import { Cart, CartItem } from "@/types/cart";
import Product from "@/types/product";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

type CartSidebarProps = {
  cart: Cart;
  products: Product[];
  deleteCart: () => Promise<void>;
};

export default function CartSidebar({
  cart,
  products,
  deleteCart,
}: CartSidebarProps) {
  const router = useRouter();

  const continueCheckout = () => {
    if (cart.items.length > 0) {
      router.push("/checkoutCoordinates");
    }
  };

  const getProduct = (productId: string) => {
    return products.find((p) => p._id === productId);
  };

  return (
    <div
      className="
      lg:sticky
      lg:top-8
      top-8
      border
      border-stone-200
      bg-white
      shadow-sm
      "
    >
      {/* Header */}
      <div className="border-b border-stone-200 p-5">
        <p
          className="
          uppercase
          tracking-[2px]
          text-[10px]
          text-stone-400
          "
        >
          Expedition Manifest
        </p>

        <h2 className="mt-2 font-medium text-stone-900">
          Selected Coordinates
        </h2>
        <button onClick={deleteCart}><Trash></Trash></button>
      </div>

      {/* Body */}
      <div className="p-5 min-h-65">
        {cart.items.length === 0 ? (
          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-12
            "
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              border
              border-stone-200
              flex
              items-center
              justify-center
              mb-4
              "
            >
              📍
            </div>

            <p className="text-sm text-stone-500">
              Awaiting survey input.
            </p>

            <p className="text-xs text-stone-400 mt-1">
              Select coordinates to begin.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item: CartItem) => {
              const product = getProduct(item.productId);

              return (
                <div
                  key={item.productId}
                  className="
                  border-b
                  border-stone-100
                  pb-3
                  "
                >
                  <h3 className="font-medium text-sm">
                    {product?.name ?? "Unknown Product"}
                  </h3>

                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-stone-500">
                      Qty {item.quantity}
                    </span>

                    <span className="text-sm">
                      ₹
                      {(
                        item.quantity *
                        item.priceAtPurchase
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Subtotal */}
            <div className="pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">
                  Subtotal
                </span>

                <span>
                  ₹{cart.subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mt-2 font-medium">
                <span>Total</span>

                <span>
                  ₹{cart.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 p-5">
        <button
          onClick={continueCheckout}
          disabled={cart.items.length === 0}
          className={`
          w-full
          py-3
          uppercase
          tracking-[2px]
          text-[11px]
          transition

          ${
            cart.items.length > 0
              ? "bg-[#171717] text-white"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }
        `}
        >
          Continue Expedition
        </button>
      </div>
    </div>
  );
}