import React from 'react';

export default function Footer() {
    return (
        <footer className="relative mt-auto bg-slate-900 border-t border-slate-800 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Emergency Assistance
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Providing immediate support for those in need. Secure, fast, and reliable assistance program.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Guides</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-slate-400">support@emergencyapp.com</li>
                            <li className="text-sm text-slate-400">1-800-123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Emergency Assistance Program. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
