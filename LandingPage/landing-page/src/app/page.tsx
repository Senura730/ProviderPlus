import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MissionVision from "@/components/MissionVision"
import AIChat from "@/components/AIChat"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans selection:bg-gray-200">
            <Navbar />
            <Hero />
            <MissionVision />
            <AIChat />
            <Features />
            <Footer />
        </main>
    );
}