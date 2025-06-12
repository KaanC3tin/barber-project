import { ServiceItemTypes } from '@/constans'
import Image from 'next/image'
import React from 'react'
import { Card } from '@/components/ui/card';

export interface ServiceProps {
    services: ServiceItemTypes[]
}

const Services = ({ services }: ServiceProps) => {

    return (
        <div className="min-h-screen pt-[96px]">
            {/* Hero Section */}
            <div className='relative w-full h-[45vh] bg-fixed bg-center bg-cover mb-16'
                style={{ backgroundImage: "url('/images/slider/barber-service-3.jpg')" }}>

                {/* <Image
                    style={}
                    src='/images/slider/barber-service-3.jpg'
                    alt='bg'
                    fill
                    className='object-cover'
                /> */}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

                {/* Overlapping Text Design */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="relative">
                        {/* Background Text (Light) */}
                        <h1 className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider">
                            HİZMETLERİMİZ
                        </h1>
                        {/* Foreground Text (Dark) */}
                        <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white tracking-wide">
                            HİZMETLERİMİZ
                        </h1>
                        {/* Accent Line */}
                        {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div> */}
                    </div>
                </div>
            </div>

            {/* Services Grid - Alternating Layout */}
            <div className="container mx-auto px-4">
                <div className="space-y-16">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-8 ${index % 2 === 0
                                ? 'flex-row'
                                : 'flex-row-reverse'
                                } max-w-6xl mx-auto`}
                        >
                            {/* Image Card */}
                            <div className="flex-1 max-w-md">
                                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                    <div className="relative h-[300px] w-full">
                                        <Image
                                            fill
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </Card>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'
                                    }`}>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {item.description || "Profesyonel ekibimiz ile size özel bakım hizmeti sunuyoruz. Kaliteli ürünler ve deneyimli berberlerimiz ile mükemmel sonuçlar alın."}
                                    </p>
                                    <div className={`flex gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                        }`}>
                                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                                            Profesyonel
                                        </span>
                                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                            Kaliteli
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-16"></div>
        </div>
    )
}

export default Services