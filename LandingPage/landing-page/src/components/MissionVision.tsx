'use client';
import { motion } from "framer-motion";

const MissionVision = () => {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* Mission */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 text-center flex flex-col items-center min-h-[340px]"
                >
                    <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Mission</h2>
                    <div className="w-12 h-1 bg-gray-200 mb-8 rounded-full"></div>
                    <p className="text-sm text-gray-500 leading-loose max-w-xs">
                        To simplify daily life by connecting people with reliable, verified services instantly.
                        We aim to bridge the gap between service seekers and providers through technology.
                    </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 text-center flex flex-col items-center min-h-[340px]"
                >
                    <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Vision</h2>
                    <div className="w-12 h-1 bg-gray-200 mb-8 rounded-full"></div>
                    <p className="text-sm text-gray-500 leading-loose max-w-xs">
                        To become the world's most trusted all-in-one platform where any service is just one click away.
                        Empowering communities through seamless digital solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};


export default MissionVision;