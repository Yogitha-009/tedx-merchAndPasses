'use client';

import { CartItem } from "@/types/cart";
import { useRouter } from "next/navigation";

type CartSidebarProps = {
  cartItems: CartItem[];
};

export default function CartSidebar({
  cartItems,
}: CartSidebarProps) {
  const router = useRouter();

  const continueCheckout = () => {
    if (cartItems.length > 0) {
      router.push("/checkoutCoordinates");
    }
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
      </div>

      {/* Body */}
      <div className="p-5 min-h-65">
        {cartItems.length === 0 ? (
          <div className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            py-12
            "
          >
            <div className="
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
            {cartItems.map((item) => (
              <div
                key={item.product._id}
                className="
                border-b
                border-stone-100
                pb-3
                "
              >
                <h3 className="font-medium text-sm">
                  {item.product.title}
                </h3>

                <div className="flex justify-between mt-1">
                  <span className="text-xs text-stone-500">
                    Qty {item.quantity}
                  </span>

                  <span className="text-sm">
                    $
                    {(
                      item.quantity *
                      item.product.price
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 p-5">
        <button
          onClick={continueCheckout}
          disabled={cartItems.length === 0}
          className={`
          w-full
          py-3
          uppercase
          tracking-[2px]
          text-[11px]
          transition

          ${
            cartItems.length > 0
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