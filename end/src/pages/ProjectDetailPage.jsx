import { useLoaderData, Link, useNavigate } from 'react-router-dom'

export const ProjectDetailPage = () => {
    const { project } = useLoaderData()
    const navigate = useNavigate()

    return (
        <section className="py-20 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 border-t-8 border-b-8 border-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 border-4 border-black transform rotate-12"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-400 border-4 border-black transform -rotate-45"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-black text-white px-6 py-3 font-black border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:scale-105 hover:-translate-y-1 transition-all duration-200"
                    >
                        ← BACK TO PROJECTS
                    </button>
                </div>

                {/* Project Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-2 inline-block">
                        {project.title}
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Project Image and Gallery */}
                    <div className="space-y-8">
                        {/* Main Project Image */}
                        <div className={`${project.color} p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1`}>
                            <div className="w-full h-96 bg-black border-4 border-white flex items-center justify-center">
                                <span className="text-white font-black text-4xl">PROJECT IMAGE</span>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((index) => (
                                <div
                                    key={index}
                                    className="w-full h-24 bg-gray-800 border-4 border-black shadow-[4px_4px_0px_0px_#000000] flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200"
                                >
                                    <span className="text-white font-black text-sm">IMG {index}</span>
                                </div>
                            ))}
                        </div>

                        {/* Live Demo and Code Links */}
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-green-400 text-black px-6 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] hover:scale-105 hover:-translate-y-2 transition-all duration-200">
                                LIVE DEMO 🚀
                            </button>
                            <button className="flex-1 bg-black text-white px-6 py-4 font-black text-xl border-8 border-white shadow-[8px_8px_0px_0px_#ffffff] hover:scale-105 hover:-translate-y-2 transition-all duration-200">
                                VIEW CODE 💻
                            </button>
                        </div>
                    </div>

                    {/* Right side - Project Details */}
                    <div className="space-y-8">
                        {/* Project Description */}
                        <div className="bg-white p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
                            <h2 className="text-3xl font-black text-black mb-6">PROJECT OVERVIEW</h2>
                            <p className="text-lg font-bold text-black mb-6">
                                {project.description}
                            </p>
                            <p className="text-base font-bold text-black">
                                {project.details}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-red-500 text-white p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-2">
                            <h3 className="text-2xl font-black mb-4">TECH STACK</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-black text-white px-4 py-2 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Features */}
                        <div className="bg-yellow-400 text-black p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-2">
                            <h3 className="text-2xl font-black mb-4">KEY FEATURES</h3>
                            <ul className="space-y-2 font-bold">
                                <li>• RESPONSIVE DESIGN</li>
                                <li>• PERFORMANCE OPTIMIZED</li>
                                <li>• MODERN UI/UX</li>
                                <li>• CROSS-BROWSER COMPATIBLE</li>
                                <li>• SEO OPTIMIZED</li>
                            </ul>
                        </div>

                        {/* Project Stats */}
                        <div className="bg-purple-500 text-white p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1">
                            <h3 className="text-2xl font-black mb-4">PROJECT STATS</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-black">6</div>
                                    <div className="text-sm font-bold">WEEKS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black">95%</div>
                                    <div className="text-sm font-bold">PERFORMANCE</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black">100%</div>
                                    <div className="text-sm font-bold">MOBILE READY</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black">A+</div>
                                    <div className="text-sm font-bold">SEO SCORE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                <div className="mt-20">
                    <h2 className="text-3xl font-black text-black text-center mb-12 bg-green-400 inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform rotate-1">
                        MORE PROJECTS
                    </h2>

                    <div className="text-center">
                        <Link
                            to="/projects"
                            className="bg-orange-500 text-black px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] no-underline"
                        >
                            VIEW ALL PROJECTS
                        </Link>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16 bg-gradient-to-r from-blue-400 to-green-400 p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
                    <div className="text-center">
                        <h3 className="text-2xl font-black text-black mb-4">INTERESTED IN SIMILAR WORK?</h3>
                        <p className="font-bold text-black mb-6">
                            LET'S DISCUSS YOUR PROJECT REQUIREMENTS!
                        </p>
                        <Link
                            to="/contact"
                            className="bg-red-500 text-white px-6 py-3 font-black border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:scale-105 transition-all duration-200 no-underline"
                        >
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}