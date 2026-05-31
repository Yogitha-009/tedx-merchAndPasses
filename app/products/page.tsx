'use client';

import ProductSheet from "@/components/products/productSheet";
import mockProducts from "@/lib/mock/mockProducts";

export default function Products() {    
    return (
        <div>
            
            <div className="
            bg-amber-50
            text-black
            px-4 md:px-8 lg:px-16
            py-12 md:py-16 lg:py-20
            ">
                <h1 className="
                text-3xl 
                uppercase">expedition supplies</h1>
                <p className="
                text-[#171717]
                tracking-[1.2px]
                ">Secure your passage and acquire essential artifacts for the journey into the unknown.All items are logged in the central archive</p>
                {/* Render the list of products here. */}
                <ProductSheet/>
            </div>
        </div>
    );
}