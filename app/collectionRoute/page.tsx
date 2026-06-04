'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {UnderlineInput } from "@/components/ui/input";
import { Stepper } from "@/components/modern-ui/stepper";
import { CollectionRouteData, collectionRouteSchema } from "@/lib/validations/collectionRouteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/components/navigation";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X,
    Building,
    House,
} from "lucide-react";


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
  reset,
  formState: { errors, isValid },
  } = useForm<CollectionRouteData>({
  resolver: zodResolver(collectionRouteSchema),
  mode: "onChange",
  defaultValues: {
    routeType: "inCampus",
  },
  });

  const onSubmit = (data: CollectionRouteData) => {
  localStorage.setItem(
      "collectionRoute",
      JSON.stringify(data)
    );
  router.push("/review");
  };
  const router = useRouter();
  const selectedHostel = watch("hostel");

  useEffect(() => {
    const savedRoute = localStorage.getItem("collectionRoute");
    if (savedRoute) {reset(JSON.parse(savedRoute));}
  }, [reset]);
  
    return (
        <div className="min-h-screen bg-[#F5F5F4] flex items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-[#F9F8F6] border border-stone-200 shadow-xl">

        {/* Header */}
        <nav className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <img
            src="/Icon.svg"
            alt="icon"
            className="w-8 h-8"
          />

          <div>
            <p className="uppercase tracking-[2px] text-[10px] text-stone-500">
              Checkout Protocol
            </p>

            <h1 className="text-lg font-medium text-stone-900">
              Delivery Route
            </h1>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 uppercase text-[10px] tracking-[2px] text-stone-500"
        >
          <X size={14} />
          Abort
        </Link>
      </nav>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row">

          {/* Sidebar */}
          <div className="lg:w-55 border-r border-stone-200 p-6">
            <p className="uppercase tracking-[2px] text-[10px] text-stone-400 mb-6">
              Progress
            </p>

            <Stepper
              steps={steps}
              activeStep={1}
              orientation="vertical"
            />

            <div className="mt-12 border border-stone-200 p-4 text-[11px] text-stone-500 leading-5">
              Encryption active.
              <br />
              Transmission secure.
              <br />
              Terra Incognita Server.
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-3xl font-medium text-stone-900 mb-2">
              Collection Route
            </h1>

            <p className="text-stone-500 mb-8">
              Designate the drop point for your artifacts and passes.
            </p>

            {/* Tabs */}
            <Tabs
              defaultValue="inCampus"
              onValueChange={(value) =>
                setValue(
                  "routeType",
                  value as "inCampus" | "outCampus",
                  { shouldValidate: true }
                )
              }
            >
              <TabsList className="grid grid-cols-2 w-full max-w-md mb-8">
                <TabsTrigger
                  value="inCampus"
                  className="flex items-center gap-2"
                >
                  <Building size={16} />
                  In Campus
                </TabsTrigger>

                <TabsTrigger
                  value="outCampus"
                  className="flex items-center gap-2"
                >
                  <House size={16} />
                  Out of Campus
                </TabsTrigger>
              </TabsList>

              {/* In Campus */}
              <TabsContent value="inCampus" className="space-y-6">
                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Hostel Selector
                  </label>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full mt-2 justify-between"
                      >
                        {selectedHostel || "Select Hostel"}
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-72">
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() =>
                            setValue(
                              "hostel",
                              "C.V Raman",
                              { shouldValidate: true }
                            )
                          }
                        >
                          C.V Raman
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() =>
                            setValue(
                              "hostel",
                              "Aryabhatta boys hostel",
                              { shouldValidate: true }
                            )
                          }
                        >
                          Aryabhatta boys hostel
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() =>
                            setValue(
                              "hostel",
                              "Aryabhatta girls hostel",
                              { shouldValidate: true }
                            )
                          }
                        >
                          Aryabhatta girls hostel
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() =>
                            setValue(
                              "hostel",
                              "Asima",
                              { shouldValidate: true }
                            )
                          }
                        >
                          Asima
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() =>
                            setValue(
                              "hostel",
                              "Kalam",
                              { shouldValidate: true }
                            )
                          }
                        >
                          Kalam
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <p className="text-red-500 text-sm mt-1">
                    {errors.hostel?.message}
                  </p>
                </div>

                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Room / Coordinate
                  </label>

                  <UnderlineInput
                    placeholder="e.g. A-304"
                    {...register("roomCoordinate")}
                  />
                </div>

                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Collection Notes (Optional)
                  </label>

                  <UnderlineInput
                    placeholder="Leave at reception, etc."
                    {...register("collectionNotes")}
                  />
                </div>
              </TabsContent>

              {/* Out Campus */}
              <TabsContent value="outCampus" className="space-y-6">
                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Address
                  </label>

                  <UnderlineInput
                    placeholder="123 Main Street"
                    {...register("address")}
                  />
                </div>

                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Postal Code
                  </label>

                  <UnderlineInput
                    placeholder="560001"
                    {...register("postalCode")}
                  />
                </div>

                <div>
                  <label className="uppercase tracking-[2px] text-[10px] text-stone-500">
                    Collection Notes (Optional)
                  </label>

                  <UnderlineInput
                    placeholder="Leave at reception, etc."
                    {...register("collectionNotes")}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 px-6 py-4 flex justify-between items-center">
          <Link
            href="/checkoutCoordinates"
            className="uppercase text-[11px] tracking-[2px] text-stone-500"
          >
            ← Back
          </Link>

          <button
            type="submit"
            disabled={!isValid}
            className={`px-8 py-3 uppercase tracking-[2px] text-[11px]
            ${
              isValid
                ? "bg-stone-800 text-white"
                : "bg-stone-300 text-stone-500 cursor-not-allowed"
            }`}
          >
            Continue →
          </button>
        </div>
      </form>
    </div>
  </div>
    );
}