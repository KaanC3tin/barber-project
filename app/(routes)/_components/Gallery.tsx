import { GalleryItemTypes } from '@/constans'
import Image from 'next/image'
import React from 'react'


interface GalleryProps {
    gallery: GalleryItemTypes[]
}

const Gallery = ({ gallery }: GalleryProps) => {
    return (
        <div className='min-h-screen pt-[96px]'>
            <div className='relative w-full h-[40vh] bg-center bg-cover bg-fixed mb-16'
                style={{ backgroundImage: "url('/images/slider/barber-service-1.jpg')" }}>
                <div className='absolute inset-0 bg-black/50 z-10' />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="relative">
                        {/* Background Text (Light) */}
                        <h1 className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider">
                            Galeri
                        </h1>
                        {/* Foreground Text (Dark) */}
                        <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white tracking-wide">
                            Galeri
                        </h1>
                        {/* Accent Line */}
                        {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div> */}
                    </div>
                </div>

            </div>
            <div className='px-4 md:px-32 lg:px-64'>
                <div className='flex items-center justify-center gap-8 flex-wrap py-10'>
                    {gallery.map((img, id) => (
                        <div key={id} className='group'>
                            <div className='flex flex-col'>
                                <div className='relative'>
                                    <div className='flex items-center justify-center'>
                                        <h1 className='text-8xl md:text-6xl  font-black group text-white/20 group-hover:text-white/70 tracking-wide absolute -top-12 z-10 text-center transition-all duration-500 ease-out'>
                                            {img.title}
                                        </h1>
                                        <div className='relative w-[400px] h-[400px]'>
                                            <Image
                                                src={img.image}
                                                alt={img.title}
                                                title={img.title}
                                                fill
                                                sizes='400px'
                                                className='gap-6 rounded-2xl z-10 object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-8 flex-wrap py-10'>
                    {gallery.map((img, id) => (
                        <div key={id} className='group'>
                            <div className='flex flex-col'>
                                <div className='relative'>
                                    <div className='flex items-center justify-center'>
                                        <h1 className='text-8xl md:text-6xl  font-black group text-white/20 group-hover:text-white/70 tracking-wide absolute -top-12 z-10 text-center transition-all duration-500 ease-out'>
                                            {img.title}
                                        </h1>
                                        <div className='relative w-[400px] h-[400px]'>
                                            <Image
                                                src={img.image}
                                                alt={img.title}
                                                title={img.title}
                                                fill
                                                sizes='400px'
                                                className='gap-6 rounded-2xl z-10 object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery

