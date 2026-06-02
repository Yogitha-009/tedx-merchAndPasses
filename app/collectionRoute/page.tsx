import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input, UnderlineInput } from "@/components/ui/input"
import { Stepper } from "@/components/modern-ui/stepper";

export default function CollectionRoute() {
    const steps = [
    { id: 1, title: "Account Details" },
    { id: 2, title: "Personal Information" },
    { id: 3, title: "Review & Submit" }
  ];
    return (
        <div>
            <h1>Collection Route</h1>
            <p>Designate the drop point for your artifacts and passes.</p>
            <Tabs defaultValue="In Campus" className="w-100">
            <TabsList>
            <TabsTrigger value="In Campus">In Campus</TabsTrigger>
            <TabsTrigger value="Out of Campus">Out of Campus</TabsTrigger>
            </TabsList>
            <TabsContent value="In Campus">
                <p>Hostel Selector</p>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline">Hostel Selector</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>C.V Raman</DropdownMenuItem>
                        <DropdownMenuItem>Aryabhatta boys hostel</DropdownMenuItem>
                        <DropdownMenuItem>Aryabhatta girls hostel</DropdownMenuItem>
                        <DropdownMenuItem>Asima</DropdownMenuItem>
                        <DropdownMenuItem>Kalam</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>Room/Coodinate</p>
            <UnderlineInput placeholder="e.g. A-304" />
            <p>Collection Notes(Optional)</p>
            <UnderlineInput placeholder="e.g. Leave at reception etc." />
            </TabsContent>
            <TabsContent value="Out of Campus">
                <p>Address</p>
                <UnderlineInput placeholder="e.g. 123, Main Street, City, Country" />
                <p>Postal Code</p>
                <UnderlineInput placeholder="e.g. 123456" />
                <p>Collection Notes(Optional)</p>
                <UnderlineInput placeholder="e.g. Leave at reception etc." />
            </TabsContent>
            </Tabs>
            <div>
                <button>BACK</button>
                <button>CONTINUE</button>
            </div>
            <div><Stepper steps={steps} activeStep={1} orientation="vertical" /></div>
        </div>
    );
}