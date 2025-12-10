import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* 
        pt-20 pushes content below fixed header 
        min-h-[calc(100vh-theme(spacing.16))] ensures footer stays at bottom if content is short
      */}
            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
                <div className="animate-fade-in-up">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}
