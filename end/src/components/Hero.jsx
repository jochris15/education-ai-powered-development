const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 border-8 border-black transform rotate-12 shadow-[8px_8px_0px_0px_#000000]"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 border-8 border-black transform -rotate-45 shadow-[8px_8px_0px_0px_#000000]"></div>
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500 border-8 border-black transform rotate-45 shadow-[8px_8px_0px_0px_#000000]"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400 border-8 border-black transform -rotate-12 shadow-[8px_8px_0px_0px_#000000]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
                <div className="w-full">
                    {/* Main content */}
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-8xl font-black text-black leading-none">
                                <span className="inline-block bg-white px-6 py-2 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-2">
                                    JOHN
                                </span>
                                <br />
                                <span className="inline-block bg-red-500 text-white px-6 py-2 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform rotate-1 mt-4">
                                    DOE
                                </span>
                            </h1>

                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <span className="bg-black text-white px-6 py-3 font-black text-xl border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] transform rotate-1">
                                    FULL STACK
                                </span>
                                <span className="bg-green-400 text-black px-6 py-3 font-black text-xl border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform -rotate-1">
                                    DEVELOPER
                                </span>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-black max-w-3xl mx-auto bg-white/80 p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1">
                            CRAFTING DIGITAL EXPERIENCES WITH BOLD DESIGN & CLEAN CODE.
                            I BUILD WEBSITES THAT DON'T JUST WORK – THEY MAKE A STATEMENT.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-6 mt-12">
                            <button className="bg-red-500 text-white px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000]">
                                VIEW MY WORK
                            </button>
                            <button className="bg-yellow-400 text-black px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000]">
                                GET IN TOUCH
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mt-12">
                            {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="bg-black text-white px-4 py-2 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] transform hover:scale-110 hover:rotate-3 transition-all duration-200"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="bg-black text-white px-4 py-2 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff]">
                    SCROLL ↓
                </div>
            </div>
        </section>
    )
}

export default Hero