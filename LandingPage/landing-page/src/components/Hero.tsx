'use client';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 mt-8 mb-24">
            {/* Main Card Container */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg rounded-[40px] p-8 md:p-16 overflow-hidden">

                {/* Decorative Background Elements (Abstract lines) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 Q 50 100 100 0" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M0 100 Q 50 0 100 100" stroke="black" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 max-w-lg text-center md:text-left"
                    >
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">The Best Service Platform</p>
                        <h1 className="text-5xl md:text-7xl font-light text-gray-800 leading-[1.1]">
                            ALL - IN - ONE <br />
                            <span className="font-bold">SERVICE</span> <br />
                            PLATFORM
                        </h1>
                        <div className="pt-4 space-y-2">
                            <p className="text-xl font-bold text-gray-800 tracking-wide">COMING SOON...</p>
                            <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
                                We are bringing the best services right to your fingertips.
                            </p>
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* The Phone Body */}
                        <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden relative z-10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

                            {/* Screen Content Simulation */}
                            <div className="w-full h-full bg-gray-100 relative">
                                {/* Map Simulation */}
                                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                {/* Route Line */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <path d="M 100 400 Q 150 300 200 200" stroke="#3B82F6" strokeWidth="4" fill="none" strokeDasharray="10 5" />
                                    <circle cx="100" cy="400" r="8" fill="#3B82F6" />
                                    <circle cx="200" cy="200" r="8" fill="#EF4444" />
                                </svg>

                                {/* UI Elements on Phone */}
                                <div className="absolute bottom-10 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Ring behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-300 rounded-full -z-10 opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-200 rounded-full -z-10 opacity-30"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default Hero;