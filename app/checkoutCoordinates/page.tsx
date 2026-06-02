'use client';

import Link from "next/link";
import{useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper } from "@/components/modern-ui/stepper";
import { useRouter } from "next/dist/client/components/navigation";
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
    formState: { errors, isValid },
  } = useForm<CheckoutCoordinatesData>({
    resolver: zodResolver(checkoutCoordinatesSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CheckoutCoordinatesData) => {
    router.push("/collectionRoute");
  };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <nav className="
            w-full
            flex
            items-center
            justify-between
            px-4 md:px-6 lg:px-8
            py-4 md:py-6
            border-b
            border-stone-300/60
            bg-[#F9F8F6]
            ">
                <div className="flex gap-2 md:gap-3 lg:gap-4">
                <img src="/Icon.svg" alt="icon" height={20} width={20}/>
                <div>
                    <p className="
                    uppercase 
                    font-light
                    text-[#79716B]
                    font-weight-400
                    leading-4
                    tracking-[2px]
                    font-size-10
                    ">checkout protocol</p>
                    <h1 className="
                    text-[#171717]
                    font-size-18
                    tracking-[0.45px]
                    leading-7
                    font-weight-500
                    font-semibold
                    ">Identify Explorer</h1>
                </div>
                </div>
                <div className="flex gap-1">
                    <Link href="/"><X></X></Link>
                    <p className="
                    uppercase
                    ">abort</p>
                </div>
            </nav>

            <div>
            <h1>Transmission Details</h1>
            <h2>Please identify yourself for the expedition log.</h2>
            </div>

            <div className="flex gap-1">
            <User className="h-4 w-4 my-1"></User>
            <h1>Explorer Designation</h1>
            </div>
            <input type="text"  placeholder="Enter your full name" 
            {...register("ExplorerDesignation")}
            />
            <p>{errors.ExplorerDesignation?.message}</p>

            <div className="flex gap-1">
            <Mail className="h-4 w-4 my-1"></Mail>  
            <h1>Comm Link</h1>
            </div>
            <input type="text"  placeholder="Email Address" 
            {...register("commLink")}
            />
            
            <p>{errors.commLink?.message}</p>

            <div className="flex gap-1">
            <Phone className="h-4 w-4 my-1"></Phone>
            <h1>Priority Frequency</h1>
            </div>
            <input type="text"  placeholder="phone number" 
            {...register("priorityFrequency")}
            />
            
            <p>{errors.priorityFrequency?.message}</p>
            <br />
            <button type="submit"  disabled={!isValid} className={`px-4 py-2 rounded ${isValid
            ? "bg-black text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            >Continue
            </button>
            </form>
            <div><Stepper steps={steps} activeStep={0} orientation="vertical" /></div>
        </div>
    );
}