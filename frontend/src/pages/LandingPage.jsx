import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg";
import Login from "./Auth/Login.jsx";
import Signup from "./Auth/Signup.jsx";
import Modal from "../UI/Modal.jsx";

const LandingPage = () => {
    const navigate = useNavigate();
    const [openAuthModal, setOpenAuthModal] = useState(true);
    const [currentPage, setCurrentPage] = useState("login");

    const handleCTA = () => {
        
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col font-sans">

            {/*--- Navigation & Hero Section (Inside Container) ---*/}
            <div className="container mx-auto px-6 flex-grow">
                <header className="flex justify-between items-center py-8 mb-12">
                    <div className="text-2xl font-black tracking-tighter italic">
                      Resume<span className="text-purple-600">Builder</span>
                    </div>
                    <button
                        className="bg-purple-600 text-sm font-bold text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-all cursor-pointer shadow-lg active:scale-95"
                        onClick={() => setOpenAuthModal(true)}>
                        Login/Signup
                    </button>
                </header>

                {/* Hero Content */}
                <div className="flex flex-col md:flex-row items-center mb-28">
                    <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
                            Build your <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500">
                                Resume in 5 Mins
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                            Effortlessly create professional, industry-standard resumes that bypass ATS filters and grab attention.
                        </p>
                        <button
                            className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transform hover:-translate-y-1 transition-all shadow-2xl cursor-pointer"
                            onClick={handleCTA}>
                            Get Started
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
                        <img
                            src={HeroImage}
                            alt="Resume Builder Preview"
                            className="relative w-full rounded-[2rem] shadow-2xl border border-slate-100"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <section className="pb-24">
                    <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">
                        Everything you need to get hired
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Blue Card */}
                        <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl p-10 shadow-xl hover:shadow-2xl transition-all group">
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-105 transition-transform origin-left">Easy Editing</h3>
                            <p className="text-blue-50 text-md leading-relaxed">
                                Update your sections with a lightning-fast live preview. No more guessing.
                            </p>
                        </div>

                        {/* Lime Card */}
                        <div className="bg-gradient-to-br from-emerald-300 via-green-200 to-yellow-200 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all group">
                            <h3 className="text-2xl font-bold mb-4 text-emerald-950 group-hover:scale-105 transition-transform origin-left">PDF Export</h3>
                            <p className="text-emerald-900 text-md leading-relaxed">
                                Ready to apply? Export your CV in a high-quality, official PDF format instantly.
                            </p>
                        </div>

                        {/* Purple Card */}
                        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all group">
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-105 transition-transform origin-left">Pro Templates</h3>
                            <p className="text-purple-50 text-md leading-relaxed">
                                Modern, recruiter-tested templates designed to showcase your skills.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/*--- Full-Width Footer (Outside Container) ---*/}
            <footer className="w-full bg-slate-950 text-slate-400 py-20 relative">
                {/* Ninja Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-emerald-400 to-violet-600"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="text-white text-2xl font-bold tracking-tighter mb-6">
                                BYTECODE<span className="text-emerald-400">NINJA</span>
                            </h2>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Precision-engineered resumes for the next generation of tech talent.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Builder</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Fast</a></li>
                                <li><a href="#" className="hover:text-violet-400 transition-colors">Easy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Support</h3>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Systems OK
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Follow</h3>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500 transition-all cursor-pointer group">
                                    <span className="text-xs font-bold group-hover:text-white">GH</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-violet-500 transition-all cursor-pointer group">
                                    <span className="text-xs font-bold group-hover:text-white">LI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest">
                        <p>&copy; {new Date().getFullYear()} BYTECODENINJA</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Auth Modal Trigger */}
            {openAuthModal && (
                <Modal
                    isOpen={openAuthModal}
                    onClose={() => setOpenAuthModal(false)}
                    hideHeader
                >
                    <div className="py-4">
                        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
                        {currentPage === "signup" && <Signup setCurrentPage={setCurrentPage} />}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default LandingPage;