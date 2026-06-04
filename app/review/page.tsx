'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F4] flex items-center justify-center p-4">
      <div className="
        w-full
        max-w-3xl
        bg-[#F9F8F6]
        border
        border-stone-200
        shadow-xl
        "
      >
        {/* Header */}
        <div className="
          border-b
          border-stone-200
          px-6
          py-4
          flex
          items-center
          gap-3
          "
        >
          <div className="
            w-8
            h-8
            rounded-full
            border
            border-stone-300
            flex
            items-center
            justify-center
            "
          >
            <Check className="w-4 h-4 text-stone-700" />
          </div>

          <div>
            <p className="
              uppercase
              tracking-[2px]
              text-[10px]
              text-stone-500
              "
            >
              Transmission Status
            </p>

            <h1 className="text-sm text-stone-900">
              Expedition Confirmed
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          py-16
          md:py-24
          "
        >
          {/* Success Icon */}
          <div className="
            w-20
            h-20
            rounded-full
            bg-green-50
            border
            border-green-100
            flex
            items-center
            justify-center
            mb-8
            "
          >
            <Check className="w-9 h-9 text-green-700" />
          </div>

          <h1 className="
            text-2xl
            md:text-3xl
            font-medium
            text-stone-900
            mb-4
            "
          >
            Transmission Successful
          </h1>

          <p className="
            max-w-md
            text-stone-500
            leading-7
            mb-10
            "
          >
            Your coordinates have been mapped and your
            payload is secured. Welcome to Terra
            Incognita, Explorer.
          </p>

          {/* Authorization Code */}
          <div className="
            border
            border-stone-200
            px-8
            py-4
            mb-10
            "
          >
            <p className="
              uppercase
              tracking-[2px]
              text-[10px]
              text-stone-400
              mb-2
              "
            >
              Authorization Code
            </p>

            <p
              className="
              text-lg
              tracking-[3px]
              text-stone-800
              "
            >
              TI-137728
            </p>
          </div>

          <Link
            href="/"
            className="
            bg-stone-900
            text-white
            uppercase
            tracking-[2px]
            text-[11px]
            px-8
            py-3
            transition
            hover:bg-black
            "
          >
            Return To Outpost
          </Link>
        </div>
      </div>
    </div>
  );
}