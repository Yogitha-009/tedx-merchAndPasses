import Image from "next/image";
import Products from "./products/page";
import CartSidebar from "./cartSidebar/page";
import Navbar from "@/components/layout/Navbar";
export default function Home() {
  return (
    <div>
    <Navbar/>
   <div className="flex">
    <div className="flex-1 overflow-y-auto">
     <Products />
     </div>
     <div className="sticky top-0 h-screen  w-95">
     <CartSidebar/>
     </div>
   </div>
   </div>
  );
}
