"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/n0d0dg3@outlook.com", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Bir hata oluştu. Lütfen tekrar deneyin.");
            }
        } catch (error) {
            alert("Bağlantı hatası. Lütfen daha sonra tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 md:px-32 lg:px-64">
                <div className="max-w-md mx-auto p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                    <div className="text-green-600 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Mesajınız Gönderildi!</h3>
                    <p className="text-green-600">En kısa sürede size dönüş yapacağız.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-4 py-2 text-green-700 hover:text-green-800 underline"
                    >
                        Yeni mesaj gönder
                    </button>
                </div>
            </div>
        );
    }

    return (
        // ÇÖZÜM 1: min-h-screen + flex kullan
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <div className="pt-[96px] flex-shrink-0">
                <div className='relative w-full h-[40vh] bg-cover bg-center bg-fixed'
                    style={{ backgroundImage: "url('/images/slider/contact-hero-section.jpg')" }}>
                    <div className='absolute inset-0 bg-black/50 z-10' />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="relative">
                            <h1 className="text-8xl md:text-9xl font-black text-white/15 select-none tracking-wider">
                                İletişim
                            </h1>
                            <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-5xl font-bold text-white tracking-wide">
                                İletişim
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section - Flex-grow ile kalan alanı kapla */}
            <div className="flex-grow flex items-center justify-center px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="max-w-md w-full p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Hidden Fields */}
                        <input type="hidden" name="_subject" value="Yeni İletişim Formu Talebi" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_language" value="tr" />
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Mesajınızı aldık! En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz."
                        />

                        <div>
                            <h2 className="block text-2xl !text-amber-400 text-center font-medium mb-6">
                                İletişim Formu
                            </h2>

                            <label htmlFor="konu" className="block text-sm font-medium text-white/90 mb-2">
                                Konu *
                            </label>
                            <input
                                type="text"
                                name="Konu"
                                id="konu"
                                placeholder="Mesajınızın konusu"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                                E-posta Adresiniz *
                            </label>
                            <input
                                type="email"
                                name="E-posta"
                                id="email"
                                placeholder="ornek@email.com"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="aciklama" className="block text-sm font-medium text-white/90 mb-2">
                                Mesajınız *
                            </label>
                            <textarea
                                name="Mesaj"
                                id="aciklama"
                                rows={5}
                                placeholder="Mesajınızı buraya yazın..."
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 resize-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                        >
                            {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

