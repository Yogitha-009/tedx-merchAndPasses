'use client';

import Link from "next/link";
import{useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper } from "@/components/modern-ui/stepper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { 
    checkoutCoordinatesSchema,
    type CheckoutCoordinatesData } from "@/lib/validations/checkoutCoordinatesSchema";
import {
  X,
  Mail,
  Phone,
  User,
} from "lucide-react";

export default function CheckoutCoordinates() {
    const router = useRouter();
    const steps = [
    { id: 1, title: "Coordinates" },
    { id: 2, title: "Route" },
    { id: 3, title: "Manifest" }
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CheckoutCoordinatesData>({
    resolver: zodResolver(checkoutCoordinatesSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CheckoutCoordinatesData) => {
    localStorage.setItem(
      "checkoutCoordinates",
      JSON.stringify(data)
    );
    router.push("/collectionRoute");
  };

  useEffect(() => {
  const savedData = localStorage.getItem("checkoutCoordinates");
  if (savedData) {reset(JSON.parse(savedData));}
  }, [reset]);

return (
  <div className="min-h-screen bg-[#F9F8F6] flex items-center justify-center p-4">
    <div className="w-full max-w-6xl bg-[#F9F8F6] border border-stone-200 shadow-xl">

      {/* Navbar */}
      <nav
        className="
        flex
        items-center
        justify-between
        px-4
        md:px-8
        py-5
        border-b
        border-stone-300/60
      "
      >
        <div className="flex items-center gap-3">
          <img
            src="/Icon.svg"
            alt="icon"
            className="w-8 h-8"
          />

          <div>
            <p
              className="
              uppercase
              text-[10px]
              tracking-[2px]
              text-stone-500
            "
            >
              Checkout Protocol
            </p>

            <h1
              className="
              text-lg
              font-medium
              text-neutral-900
            "
            >
              Identify Explorer
            </h1>
          </div>
        </div>

        <Link
          href="/"
          className="
          flex
          items-center
          gap-2
          text-xs
          uppercase
          tracking-widest
          text-stone-500
        "
        >
          <X className="w-4 h-4" />
          Abort
        </Link>
      </nav>

      <div className="flex flex-col lg:flex-row min-h-162.5">

        {/* Sidebar */}
        <div
          className="
          w-full
          lg:w-65
          border-b
          lg:border-b-0
          lg:border-r
          border-stone-200
          p-6
        "
        >
          <p
            className="
            text-[10px]
            uppercase
            tracking-[2px]
            text-stone-400
            mb-6
          "
          >
            Progress
          </p>

          <Stepper
            steps={steps}
            activeStep={0}
            orientation="vertical"
          />

          <div
            className="
            mt-10
            border
            border-stone-200
            p-4
            text-[11px]
            text-stone-500
            leading-5
          "
          >
            Encryption active.
            <br />
            Transmission secure.
            <br />
            Terra Incognita Server.
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 p-6 md:p-10"
          >
            <div className="mb-10">
              <h1
                className="
                text-3xl
                font-medium
                text-neutral-900
                mb-2
              "
              >
                Transmission Details
              </h1>

              <p className="text-stone-500">
                Please identify yourself for the expedition log.
              </p>
            </div>

            {/* Name */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-stone-500" />
                <label className="uppercase text-[10px] tracking-[2px] text-stone-500">
                  Explorer Designation
                </label>
              </div>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("ExplorerDesignation")}
                className="
                w-full
                border-b
                border-stone-300
                bg-transparent
                pb-3
                outline-none
                placeholder:text-stone-400
              "
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.ExplorerDesignation?.message}
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-stone-500" />
                <label className="uppercase text-[10px] tracking-[2px] text-stone-500">
                  Comm Link
                </label>
              </div>

              <input
                type="email"
                placeholder="Email Address"
                {...register("commLink")}
                className="
                w-full
                border-b
                border-stone-300
                bg-transparent
                pb-3
                outline-none
                placeholder:text-stone-400
              "
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.commLink?.message}
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-stone-500" />
                <label className="uppercase text-[10px] tracking-[2px] text-stone-500">
                  Priority Frequency
                </label>
              </div>

              <input
                type="text"
                placeholder="Phone Number"
                {...register("priorityFrequency")}
                className="
                w-full
                border-b
                border-stone-300
                bg-transparent
                pb-3
                outline-none
                placeholder:text-stone-400
              "
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.priorityFrequency?.message}
              </p>
            </div>

            {/* Footer */}
            <div
              className="
              border-t
              border-stone-200
              pt-6
              mt-12
              flex
              justify-between
              items-center
            "
            >
              <Link
                href="/"
                className="
                uppercase
                text-xs
                tracking-widest
                text-stone-500
              "
              >
                ← Back
              </Link>

              <button
                type="submit"
                disabled={!isValid}
                className={`
                  px-8
                  py-3
                  uppercase
                  tracking-widest
                  text-xs
                  transition

                  ${
                    isValid
                      ? "bg-neutral-800 text-white"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }
                `}
              >
                Continue →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

}