'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input, UnderlineInput } from "@/components/ui/input";
import { Stepper } from "@/components/modern-ui/stepper";
import { X,
    Building,
    House,
} from "lucide-react";
import { CollectionRouteData, collectionRouteSchema } from "@/lib/validations/collectionRouteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import router from "next/dist/shared/lib/router/router";
import { CheckoutCoordinatesData } from "@/lib/validations/checkoutCoordinatesSchema";
import { useRouter } from "next/dist/client/components/navigation";

export default function CollectionRoute() {
    const steps = [
    { id: 1, title: "Coordinates" },
    { id: 2, title: "Route" },
    { id: 3, title: "Manifest" }
  ];

  const {
  register,
  handleSubmit,
  setValue,
  watch,
  formState: { errors, isValid },
} = useForm<CollectionRouteData>({
  resolver: zodResolver(collectionRouteSchema),
  mode: "onChange",
  defaultValues: {
    routeType: "inCampus",
  },
});

const onSubmit = (data: CollectionRouteData) => {
    router.push("/review");
  };
const router = useRouter();
const selectedHostel = watch("hostel");
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
            <h1>Collection Route</h1>
            <p>Designate the drop point for your artifacts and passes.</p>
            </div>

            <Tabs
            defaultValue="inCampus"
            onValueChange={(value) =>setValue(
            "routeType",
            value as "inCampus" | "outCampus",
            { shouldValidate: true }
            )}>
            <TabsList>
            <Building></Building>
            <TabsTrigger value="inCampus">In Campus</TabsTrigger>
            <House></House>
            <TabsTrigger value="outCampus">Out of Campus</TabsTrigger>
            </TabsList>
            <TabsContent value="inCampus">
                <p>Hostel Selector</p>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline">{selectedHostel || "Select Hostel"}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={()=>setValue("hostel","C.V Raman",{shouldValidate:true})}>C.V Raman</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setValue("hostel","Aryabhatta boys hostel",{shouldValidate:true})}>Aryabhatta boys hostel</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setValue("hostel","Aryabhatta girls hostel",{shouldValidate:true})}>Aryabhatta girls hostel</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setValue("hostel","Asima",{shouldValidate:true})}>Asima</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setValue("hostel","Kalam",{shouldValidate:true})}>Kalam</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-red-500 text-sm mt-1">{errors.hostel?.message}</p>
            <p>Room/Coodinate</p>
            <UnderlineInput placeholder="e.g. A-304" {...register("roomCoordinate")} />
            <p>Collection Notes(Optional)</p>
            <UnderlineInput placeholder="e.g. Leave at reception etc." {...register("collectionNotes")}  />
            </TabsContent>
            <TabsContent value="outCampus">
                <p>Address</p>
                <UnderlineInput placeholder="e.g. 123, Main Street, City, Country" {...register("address")}  />
                <p>Postal Code</p>
                <UnderlineInput placeholder="e.g. 123456" {...register("postalCode")} />
                <p>Collection Notes(Optional)</p>
                <UnderlineInput placeholder="e.g. Leave at reception etc." {...register("collectionNotes")}     />
            </TabsContent>
            </Tabs>
            <div>
                <Link href="/checkoutCoordinates">BACK</Link>
                <button type="submit"  disabled={!isValid} className={`px-4 py-2 rounded ${isValid
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}>Continue
            </button>
            </div>
            </form>
            <div><Stepper steps={steps} activeStep={1} orientation="vertical" /></div>
        </div>
    );
}