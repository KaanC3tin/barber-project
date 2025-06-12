import React from "react";
import Header from "./_components/Menu/Header";
import Footer from "./_components/Footer";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="text-gray-300 bg-gray-900">
            <Header />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout