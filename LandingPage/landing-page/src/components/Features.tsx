'use client';
import { Bot, MapPin, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AI Bot",
            desc: "Smart assistance tailored to your specific needs anytime."
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Geo Location",
            desc: "Real-time tracking to find services near you instantly."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Verified Providers",
            desc: "100% vetted professionals for your peace of mind."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Rating System",
            desc: "Community-driven reviews to ensure top quality."
        },
    ];

    // @ts-ignore
    // @ts-ignore
    return (
        <section className="w-full max-w-6xl mx-auto px-4 mb-32">
            <h2 className="text-center text-3xl font-bold mb-16 text-gray-800">What We Offer</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                        className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-5 transition-all duration-300 cursor-default"
                    >
                        <div className="p-4 bg-gray-50 rounded-2xl text-gray-800">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed px-2">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;