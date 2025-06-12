import { serviceItem } from '@/constans'
import Image from 'next/image';
import React from 'react'

const GalleryDemo = () => {

    const filteredService = serviceItem.filter(service =>
        ["1", "2", "3", "4", "3", "9", "8", "5"].includes(service.id)
    );
    return (
        <div className='px-4 md:px-32 lg:px-64 bg-gray-900 pt-20'>
            <div className='flex flex-col'>
                <div className='relative'>
                    <h1 className="text-8xl md:text-9xl font-black text-white/20 select-none tracking-wider text-center">
                        Galeri
                    </h1>
                    {/* Foreground Text (Dark) */}
                    <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-neutral-200 tracking-wide">
                        Galeri
                    </h1>
                </div>
                <div className='gallery flex justify-center'>
                    {filteredService.map((service) => (
                        <Image key={service.id}
                            src={service.image}
                            alt={service.title}
                            width={200}
                            height={200}
                            title={service.title}
                            className='object-cover'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryDemo