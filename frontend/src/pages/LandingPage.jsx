import React, {useState} from 'react'
import HeroImage from "../assets/HeroImage.jpg"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const[currentPage, setCurrentPage] = useState("login");

    const handleCTA =() => {};
    return (
        <div className="w-full min-h-full bg-white">
            <div className="container mx-auto px-4 py-6">
                {/*---Header---*/}
                <header className="flex justify-between items-center mb-16">
                    <div className="text-2xl font-bold">Resume Builder</div>
                    <button
                        className="bg-purple-500 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                        onClick={() => setOpenAuthModal(true)}>
                        Login/Signup
                    </button>
                </header>

                {/*---Hero Content---*/}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Build your {" "}
                            <span
                                className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                                Resume in a professional way
                            </span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Build resumes that will always standout in this competitive technological era effortlessly.
                        </p>
                        <button
                            className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={handleCTA}>
                            Get started
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 pb-4">
                        <img src={HeroImage} alt="HeroImage" className="w-full rounded-lg"/>
                    </div>
                </div>

                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-12 items-center">
                        Features that will make the process faster
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="bg-gradient-to-br from-sky-300 to-blue-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
                            <p className="text-gray-950">
                                Update you resume sections with live preview and instant formating.
                            </p>
                        </div>

                        <div
                            className="bg-gradient-to-br from-aquamarine-300 via-lime-300 to-yellow-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                One click export
                            </h3>
                            <p className="text-gray-950">
                                Download your CV instantly in a high quality oficial PDF format.
                            </p>
                        </div>

                        <div
                            className="bg-gradient-to-br from-violet-600 to-fuchsia-500 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Beautiful Templates
                            </h3>
                            <p className="text-gray-950">
                                Choose from modern, profesional templates that are way easy to customize
                            </p>
                        </div>

                    </div>
                </section>

                {/* Footer - Added mt-20 for spacing */}
                <div className="mt-20">
                    <footer className="w-[100%] bg-slate-950 text-slate-400 py-12">
                        {/* The "Ninja" Gradient Line - Full Width */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-600"></div>

                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                                {/* Brand Section */}
                                <div className="col-span-1">
                                    <h2 className="text-white text-xl font-bold tracking-tighter mb-4">
                                        BYTECODE<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">NIJA</span>
                                    </h2>
                                    <p className="text-sm leading-relaxed">
                                        Leveling up your professional presence with precision-engineered resumes.
                                    </p>
                                </div>

                                {/* Builder Section */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Builder</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Templates</a></li>
                                        <li><a href="#" className="hover:text-blue-400 transition-colors">AI Writer</a></li>
                                        <li><a href="#" className="hover:text-violet-400 transition-colors">Examples</a></li>
                                    </ul>
                                </div>

                                {/* System Section */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">System</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Operational
                                        </li>
                                    </ul>
                                </div>

                                {/* Connect Section */}
                                <div>
                                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition-all cursor-pointer group">
                                            <span className="text-xs font-bold group-hover:text-white">GH</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-violet-500 transition-all cursor-pointer group">
                                            <span className="text-xs font-bold group-hover:text-white">LI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                                <p>&copy; {new Date().getFullYear()} BYTECODENIJA. Built for the next generation of developers.</p>
                                <div className="flex gap-6">
                                    <a href="#" className="hover:underline hover:text-white">Privacy</a>
                                    <a href="#" className="hover:underline hover:text-white">Terms</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    )
}
export default LandingPage
