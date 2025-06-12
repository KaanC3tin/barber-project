// import { Menu } from 'lucide-react'
// import React from 'react'

// const MobileMenu = () => {
//     return (
//         <div className='border border-collapse lg:hidden flex items-center justify-between p-4 bg-white shadow-md rounded-full'>
//             <Menu />
//         </div >
//     )
// }

// export default MobileMenu


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constans"
import { Menu } from "lucide-react"
import Link from "next/link"


export default function MobileMenu() {
    return (
        <Sheet>

            <SheetTrigger asChild>
                <div className="text-black bg-white p-3.5 rounded-full cursor-pointer">
                    <Menu />
                </div>
                {/* //ancak scroll harket ederse menu white etmezse siyah olmalı! */}
            </SheetTrigger>
            <SheetContent className="bg-[#f4f4f4]">
                <SheetHeader>
                    {/* <SheetTitle>Edit profile</SheetTitle> */}
                    <SheetDescription className="min-h-screen flex flex-col">
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-slate-950">Menu</h1>
                            <div className="flex flex-col py-5">
                                {navLinks.map((section, index) => (
                                    <Link
                                        className="border-b border-gray-400 last:border-0 hover:text-slate-900 duration-300 transition-colors py-[2px] text-base"
                                        key={index}
                                        href={section.href}>
                                        {section.title}
                                    </Link>
                                ))}
                            </div>
                            <p> © {new Date().getFullYear()} Tüm Hakları Saklıdır</p>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
