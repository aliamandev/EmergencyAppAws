import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
    const location = useLocation();
    const isStep = location.pathname.startsWith('/step');
    const stepNumber = isStep ? parseInt(location.pathname.split('/')[2]) : 0;
    const totalSteps = 10;

    return (
        <header className="fixed top-0 w-full z-50 transition-all duration-300">
            <div className="absolute inset-0 bg-primary-900/95 backdrop-blur-md border-b border-white/10 shadow-lg"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm transition-transform group-hover:scale-105 bg-white p-1">
                                <img src={logo} alt="Emergency Assistance Logo" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Emergency Assistance
                            </span>
                        </Link>
                    </div>

                    {/* Step Indicator */}
                    {isStep && stepNumber <= totalSteps && (
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                            <span className="text-sm font-medium text-white">Step {stepNumber}</span>
                            <span className="text-sm text-primary-200">of</span>
                            <span className="text-sm font-medium text-white">{totalSteps}</span>
                        </div>
                    )}

                    {/* Navigation/Actions */}
                    <div className="flex items-center gap-3">
                        <nav className="hidden md:flex items-center gap-6 mr-4">
                            <a href="#" className="text-sm font-medium text-primary-100 hover:text-white transition-colors">Help</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
