"use client";
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const About = () => {
    const pathname = usePathname()
    const isAboutPage = pathname === '/hakkimizda'
    const isHomePage = pathname === '/'

    const ParallaxHeroSection = () => {
        return (
            <div className='pt-[96px]'>
                <div className='relative h-[40vh] bg-cover bg-center bg-fixed mb-16 w-full'
                    style={{ backgroundImage: "url('/images/slider/barber-service-4.jpg')" }}>
                    <div className='absolute inset-0 bg-black/50 z-10' />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="relative">
                            <h1 className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider">
                                Hakkımızda
                            </h1>
                            <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white tracking-wide">
                                Hakkımızda
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const HomeTitleSide = () => {
        return (
            <div className="relative py-10">
                <h1 className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider text-center">
                    Hakkımızda
                </h1>
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white tracking-wide">
                    Hakkımızda
                </h1>
            </div>
        )
    }

    return (
        <>
            {isAboutPage && <ParallaxHeroSection />}
            {isHomePage && <HomeTitleSide />}

            <div className='min-h-min bg-gray-900'>
                {/* Ana Hikaye Bölümü */}
                <div className='px-4 md:px-32 lg:px-64 pb-20'>
                    <div className='text-white flex items-center justify-center'>
                        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-12'>
                            {/* Images Section */}
                            <div className="w-full lg:w-[45%] relative">
                                <div className="relative">
                                    <div className="relative z-10">
                                        <Image
                                            src="/images/slider/barber-3.jpg"
                                            alt='Profesyonel Saç Kesimi'
                                            height={500}
                                            width={400}
                                            className='object-cover object-center rounded-lg shadow-2xl w-full h-[400px]'
                                        />
                                    </div>
                                    <div className="absolute -bottom-8 -left-8 z-20 border-4 border-white rounded-lg overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/slider/1.jpg"
                                            alt='Berber Salonu Atmosferi'
                                            height={250}
                                            width={200}
                                            className='object-cover object-center w-[200px] h-[250px]'
                                        />
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-amber-400 rounded-tl-lg"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-[55%] pl-0 lg:pl-8">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                                            Geleneksel Ustalık,
                                            <span className="text-amber-400"> Modern Yaklaşım</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-4 text-gray-300 leading-relaxed">
                                        <p className="text-lg">
                                            15 yılı aşkın deneyimimizle, saç kesimi ve bakım konusunda
                                            kendimizi sürekli geliştiriyoruz. Her müşterimize özel yaklaşım
                                            sergileyerek, kişisel tarzınızı en iyi şekilde yansıtacak
                                            kesimler sunuyoruz.
                                        </p>
                                        <p>
                                            Klasik berberlik tekniklerini modern trendlerle harmanlayarak,
                                            size en uygun görünümü yakalıyoruz. Hijyen ve kalite standartlarımız
                                            ile güvenli bir ortamda hizmet veriyoruz.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-700">
                                        <div>
                                            <h4 className="text-2xl font-bold text-amber-400">15+</h4>
                                            <p className="text-sm text-gray-400 uppercase tracking-wide">Yıl Deneyim</p>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-amber-400">1000+</h4>
                                            <p className="text-sm text-gray-400 uppercase tracking-wide">Mutlu Müşteri</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hikayemiz Bölümü */}
                <div className="px-4 md:px-32 lg:px-64 py-20 bg-gray-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                            <span className="text-amber-400">Hikayemiz</span>
                        </h3>
                        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
                            <p>
                                2008 yılında büyük bir tutkuyla başladığımız bu yolculuk, sadece saç kesmekten çok daha fazlasını ifade ediyor.
                                Usta Mehmet Bey`in 30 yıllık tecrübesini genç ve dinamik ekibimizle birleştirerek, geleneksel berberlik sanatını
                                günümüzün modern ihtiyaçlarıyla harmanlıyoruz.
                            </p>
                            <p>
                                İlk günden bu yana amacımız, her müşterimizin kendini özel hissetmesini sağlamak. Salonumuza giren her kişinin
                                sadece görünümü değil, kendine olan güveni de yenilenerek çıkması için çalışıyoruz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Değerlerimiz */}
                <div className="px-4 md:px-32 lg:px-64 py-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            <span className="text-amber-400">Değerlerimiz</span>
                        </h3>
                        <p className="text-gray-400 text-lg">Bizi farklı kılan değerler</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-amber-400 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-amber-400 text-4xl mb-4">🎯</div>
                            <h4 className="text-xl font-bold text-white mb-3">Kalite</h4>
                            <p className="text-gray-300">
                                Premium ürünler ve profesyonel ekipmanlarla, her seferinde mükemmel sonuçlar elde etmek için çalışıyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-amber-400 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-amber-400 text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-white mb-3">Güven</h4>
                            <p className="text-gray-300">
                                Müşterilerimizle kurduğumuz uzun soluklu ilişkiler, güven ve saygı temelinde şekillenir.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-amber-400 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-amber-400 text-4xl mb-4">✨</div>
                            <h4 className="text-xl font-bold text-white mb-3">İnovasyon</h4>
                            <p className="text-gray-300">
                                Sektördeki yenilikleri takip ederek, modern tekniklerle geleneksel ustalığı birleştiriyoruz.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About