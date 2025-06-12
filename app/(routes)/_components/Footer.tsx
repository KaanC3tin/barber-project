import { navLinks } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer
            className="relative bg-black bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/slider/footer.png')",
                filter: "blur(0.3px)"
            }}
        >
            {/* Dark overlay with backdrop blur */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20'>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8 py-12 md:py-16 lg:py-20">

                        {/* Logo Section - Fixed border issue */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                            <div className='inline-flex items-center justify-center border border-gray-500 rounded-full p-2'>
                                <Link href="/" className="block">
                                    <Image
                                        src="/images/slider/logo-barber.png"
                                        alt="Barber Logo"
                                        width={80}
                                        height={80}
                                        className="h-20 w-20 object-contain"
                                    />
                                </Link>
                            </div>
                            <p className="mt-4 text-white text-lg font-playfair italic tracking-wide">
                                “ Her kesimde ustalık. Geleneksel berberlik sanatını modern tekniklerle birleştiriyoruz. Profesyonel hizmet, kaliteli ürünler ve müşteri memnuniyeti önceliğimiz.”
                            </p>
                        </div>

                        {/* Navigation Links */}
                        {navLinks.map((section, index) => (
                            <div key={index} className="col-span-1">
                                <h3 className='text-lg md:text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-600'>
                                    {section.title}
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    {section.subLinks?.map((link, id) => (
                                        <li key={id}>
                                            <Link
                                                href={link.href}
                                                className='text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300 hover:underline block'
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-600">
                        <div className="py-6 md:py-8">
                            <p className="text-xs md:text-sm text-gray-400 text-center">
                                © 2025 Kaan Çetin. Tüm Hakları Saklıdır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer