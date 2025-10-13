import { useLoaderData } from 'react-router-dom'

export const AboutPage = () => {
    const { profile, stats } = useLoaderData()

    return (
        <section className="py-20 bg-green-300 border-t-8 border-b-8 border-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-20 h-20 bg-pink-500 border-4 border-black transform rotate-45"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-500 border-4 border-black transform -rotate-12"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="inline-block text-5xl md:text-6xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-2">
                        ABOUT ME
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1">
                            <h3 className="text-3xl font-black mb-6 text-black">
                                HEY THERE! I'M A PASSIONATE DEVELOPER
                            </h3>
                            <p className="text-lg font-bold text-black mb-6">
                                {profile.bio}
                            </p>
                            <p className="text-lg font-bold text-black">
                                WHEN I'M NOT CODING, YOU'LL FIND ME EXPLORING NEW TECHNOLOGIES,
                                CONTRIBUTING TO OPEN SOURCE, OR SKETCHING IDEAS FOR MY NEXT PROJECT.
                            </p>
                        </div>

                        <div className="bg-red-500 text-white p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
                            <h4 className="text-2xl font-black mb-4">MY APPROACH</h4>
                            <ul className="space-y-2 font-bold text-lg">
                                {profile.approach.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Stats and profile */}
                    <div className="space-y-8">
                        {/* Profile card */}
                        <div className="bg-yellow-400 p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] text-center transform rotate-2">
                            <div className="w-32 h-32 bg-black border-4 border-white mx-auto mb-6 flex items-center justify-center">
                                <span className="text-white font-black text-4xl">
                                    {profile.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <h3 className="text-2xl font-black text-black mb-2">{profile.name}</h3>
                            <p className="font-bold text-black">{profile.role}</p>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`text-center p-6 border-8 border-black shadow-[6px_6px_0px_0px_#000000] transform ${index % 2 === 0 ? 'rotate-1 bg-white' : '-rotate-1 bg-pink-400'
                                        }`}
                                >
                                    <div className="text-3xl font-black text-black mb-2">{stat.number}</div>
                                    <div className="text-sm font-bold text-black">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Download CV button */}
                        <div className="text-center">
                            <button className="bg-purple-500 text-white px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000]">
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation to other sections */}
                <div className="mt-16 flex justify-center space-x-6">
                    <a
                        href="/skills"
                        className="bg-blue-500 text-white px-6 py-3 font-black text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 no-underline"
                    >
                        VIEW MY SKILLS →
                    </a>
                    <a
                        href="/projects"
                        className="bg-orange-500 text-black px-6 py-3 font-black text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform hover:scale-105 hover:-translate-y-1 transition-all duration-200 no-underline"
                    >
                        SEE MY WORK →
                    </a>
                </div>
            </div>
        </section>
    )
}