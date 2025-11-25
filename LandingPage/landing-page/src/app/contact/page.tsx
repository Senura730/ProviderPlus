import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                    <p className="text-gray-500">We'd love to hear from you.</p>

                    {/* Simple Form Skeleton */}
                    <form className="mt-8 space-y-4 w-full max-w-md mx-auto text-left">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" className="mt-1 block w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full p-2 border rounded-md" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea className="mt-1 block w-full p-2 border rounded-md h-32"></textarea>
                        </div>
                        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}