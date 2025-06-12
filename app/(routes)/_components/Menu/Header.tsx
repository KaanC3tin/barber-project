'use client';
import { navLinks } from '@/constans';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    // const [active, setActive] = useState<boolean>(false)
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-4 md:px-32 lg:px-64',
                scrolled
                    ? 'bg-black backdrop-blur-none'
                    : 'border-b border-[#f4f4f4]/40'
            )}
        >
            <motion.div
                animate={{ height: scrolled ? '70px' : '96px' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center justify-between container mx-auto"
            >
                <Link href="/">
                    <div className='rounded-full border border-gray-500'>
                        <Image
                            src="/images/slider/logo-barber.png"
                            alt="Barber Logo"
                            width={80}
                            height={80}
                            className="h-12 w-12 object-contain"
                        />
                    </div>
                </Link>

                <div className="hidden lg:flex gap-10">
                    {navLinks.map((section, index) => (
                        <Link
                            key={index}
                            href={section.href}
                            className={`text-white transition-colors duration-300 hover:text-orange-500 px-0 py-2  bg-transparent
                                ${pathname === section.href ? "!text-orange-500" : ""
                                }`}
                        >
                            {section.title}
                        </Link>
                    ))}
                    <Link
                        href="https://salonrandevu.com/salon-tur/erkek-kuaforu/denizli"
                        className='bg-[#f4f4f4] text-black px-4 py-2 rounded-none hover:scale-105 duration-500'
                    >
                        Randevu Al
                    </Link>
                </div>

                <div className="lg:hidden">
                    <MobileMenu />
                </div>
            </motion.div>
        </motion.nav >

    );
};

export default Header;

