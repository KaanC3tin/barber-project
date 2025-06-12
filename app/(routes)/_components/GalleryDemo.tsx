// import { serviceItem } from '@/constans'
// import Image from 'next/image';
// import React from 'react'

// const GalleryDemo = () => {

//     const filteredService = serviceItem.filter(service =>
//         ["1", "2", "3", "4", "3", "9", "8", "5"].includes(service.id)
//     );
//     return (
//         <div className='px-4 md:px-32 lg:px-64 bg-gray-900 pt-20'>
//             <div className='flex flex-col'>
//                 <div className='relative'>
//                     <h1 className="text-8xl md:text-9xl font-black text-white/20 select-none tracking-wider text-center">
//                         Galeri
//                     </h1>
//                     {/* Foreground Text (Dark) */}
//                     <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-neutral-200 tracking-wide">
//                         Galeri
//                     </h1>
//                 </div>
//                 <div className='gallery flex justify-center'>
//                     {filteredService.map((service) => (
//                         <Image key={service.id}
//                             src={service.image}
//                             alt={service.title}
//                             width={200}
//                             height={200}
//                             title={service.title}
//                             className='object-cover'
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GalleryDemo
"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { serviceItem } from "@/constans";
import Image from "next/image";
import React from "react";

const GalleryDemo = () => {
    const myRef = useRef(null);
    // const titleRef = useRef(null);

    const isInView = useInView(myRef, {
        once: true,
        margin: "-75px", // Biraz erken başlatır
    });

    // const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });


    const filteredService = serviceItem.filter(service =>
        ["1", "2", "3", "4", "3", "9", "8", "5"].includes(service.id)
    );

    return (
        <div className='px-4 md:px-32 lg:px-64 bg-gray-900 pt-20'>
            <div className='flex flex-col'>
                {/* <div className='relative' ref={titleRef}>
                    <motion.h1
                        className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider text-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Galeri
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-neutral-200 tracking-wide">
                        Galeri
                    </motion.h1>
                </div> */}
                <div className='relative'>
                    <h1
                        className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider text-center"
                    >
                        Galeri
                    </h1>
                    <h1
                        className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-neutral-200 tracking-wide">
                        Galeri
                    </h1>
                </div>

                <motion.div
                    ref={myRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='gallery flex flex-wrap gap-4 justify-center mt-10'
                >
                    {filteredService.map((service) => (
                        <Image
                            key={service.id}
                            src={service.image}
                            alt={service.title}
                            width={200}
                            height={200}
                            title={service.title}
                            className='object-cover rounded-lg shadow-lg'
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default GalleryDemo;
