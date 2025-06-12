"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay';

import { SliderItemTypes } from '@/constans'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';


const usePoppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


interface HeroProps {
    slider: SliderItemTypes[]
}

const Hero = ({ slider }: HeroProps) => {
    return (
        <div className='min-h-screen w-full relative'>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false, // Kullanıcı etkileşiminden sonra otomatik oynatmaya devam et
                        // stopOnMouseEnter: true,   // Mouse hover'da durdur
                    }),
                ]}
                opts={{
                    align: 'start',
                    loop: true,
                    // dragFree: false, // Sürükleme özelliğini etkinleştir
                    // containScroll: 'trimSnaps',
                }}
                className="w-full h-screen relative"
            >
                <CarouselContent className="h-screen">
                    {slider.map((slide, index) => (
                        <CarouselItem key={index} className="h-screen">
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, easy: 'easeOut' }}
                                className='h-full w-full relative'
                            >
                                <Image
                                    alt={slide.title}
                                    src={slide.image || ''}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                                />
                                {/* Her slide için overlay */}
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className='space-y-2.5 text-white max-w-4xl px-4'
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, easy: 'easeOut' }}
                                    >
                                        <h2 className='text-xl md:text-2xl  text-amber-500 font-light'>
                                            {slide.subTitle}
                                        </h2>
                                        <h1 className={`text-5xl text-[#f4f4f4] font-bold tracking-wider ${usePoppins.className}`}>
                                            {slide.title}
                                        </h1>
                                        <p className='text-lg md:text-xl mx-auto'>
                                            {slide.description}
                                        </p>
                                        <div className='flex flex-col sm:flex-row'>
                                            {slide.button.map((btn, btnIndex) => (
                                                <Link key={btnIndex} href={btn.href} target='_blank'>
                                                    <Button className="transition-all duration-300 bg-orange-500 hover:backdrop-blur-md hover:backdrop-saturate-200 hover:bg-[rgba(245,166,35,0.2)]  border border-orange-500 hover:border-[rgba(245,166,35,.7)] rounded-none mt-4 transform hover:scale-105"
                                                        size={'lg'}>
                                                        <h2 className='font-semibold'>
                                                            {btn.text}
                                                        </h2>
                                                    </Button>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-7 bg-white/50 hover:bg-white/60 border-white/30 text-black' />
                <CarouselNext className='absolute right-7 bg-white/50 hover:bg-white/60 border-white/30 text-black' />
            </Carousel>
        </div>
    )
}

export default Hero