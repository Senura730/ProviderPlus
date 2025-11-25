import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-[#2A2A2A] text-gray-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

                {/* Brand Column */}
                <div className="space-y-6">
                    <h3 className="font-bold text-white text-lg">BrandName</h3>
                    <p className="text-xs leading-relaxed opacity-80 max-w-xs">
                        Connecting you with the best services in town. Reliable, fast, and secure.
                        Your one-stop solution for all daily needs.
                    </p>
                    <div className="flex gap-5 pt-2">
                        <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition" />
                        <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition" />
                    </div>
                </div>

                {/* Links Group 1 */}
                <div>
                    <h4 className="font-bold text-white mb-6">Explore</h4>
                    <ul className="space-y-3 opacity-80">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                    </ul>
                </div>

                {/* Links Group 2 */}
                <div>
                    <h4 className="font-bold text-white mb-6">Resources</h4>
                    <ul className="space-y-3 opacity-80">
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Support</a></li>
                    </ul>
                </div>

                {/* Links Group 3 */}
                <div>
                    <h4 className="font-bold text-white mb-6">Legal</h4>
                    <ul className="space-y-3 opacity-80">
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center text-xs opacity-50">
                © 2025 BrandName Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;