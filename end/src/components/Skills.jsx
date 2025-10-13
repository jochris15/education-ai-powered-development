const Skills = () => {
    const skillCategories = [
        {
            title: 'FRONTEND',
            color: 'bg-red-500',
            textColor: 'text-white',
            skills: [
                { name: 'REACT', level: 95 },
                { name: 'JAVASCRIPT', level: 90 },
                { name: 'TYPESCRIPT', level: 85 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'TAILWIND CSS', level: 90 },
                { name: 'VUE.JS', level: 80 }
            ]
        },
        {
            title: 'BACKEND',
            color: 'bg-green-400',
            textColor: 'text-black',
            skills: [
                { name: 'NODE.JS', level: 90 },
                { name: 'PYTHON', level: 85 },
                { name: 'EXPRESS.JS', level: 88 },
                { name: 'MONGODB', level: 82 },
                { name: 'POSTGRESQL', level: 80 },
                { name: 'REST APIs', level: 92 }
            ]
        },
        {
            title: 'TOOLS & OTHERS',
            color: 'bg-purple-500',
            textColor: 'text-white',
            skills: [
                { name: 'GIT', level: 95 },
                { name: 'DOCKER', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'FIGMA', level: 85 },
                { name: 'WEBPACK', level: 80 },
                { name: 'JEST', level: 78 }
            ]
        }
    ]

    const achievements = [
        { title: 'CERTIFIED REACT DEVELOPER', icon: '🏆' },
        { title: 'AWS SOLUTIONS ARCHITECT', icon: '☁️' },
        { title: 'GOOGLE ANALYTICS CERTIFIED', icon: '📊' },
        { title: 'SCRUM MASTER CERTIFIED', icon: '🚀' }
    ]

    return (
        <section className="py-20 bg-pink-300 border-t-8 border-b-8 border-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 border-4 border-black transform rotate-12"></div>
                <div className="absolute top-32 right-20 w-20 h-20 bg-blue-500 border-4 border-black transform -rotate-45"></div>
                <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-500 border-4 border-black transform rotate-45"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="inline-block text-5xl md:text-6xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-2">
                        SKILLS & EXPERTISE
                    </h2>
                </div>

                {/* Skills Categories */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`${category.color} p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform ${categoryIndex % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                }`}
                        >
                            <h3 className={`text-2xl font-black ${category.textColor} mb-6 text-center`}>
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className={`font-black ${category.textColor}`}>
                                                {skill.name}
                                            </span>
                                            <span className={`font-black ${category.textColor}`}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full bg-black h-4 border-4 border-white">
                                            <div
                                                className="h-full bg-white transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="bg-yellow-400 p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-1">
                    <h3 className="text-3xl font-black text-black text-center mb-8">
                        CERTIFICATIONS & ACHIEVEMENTS
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_#000000] text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200"
                            >
                                <div className="text-4xl mb-3">{achievement.icon}</div>
                                <h4 className="font-black text-black text-sm">
                                    {achievement.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-black text-white p-8 border-8 border-white shadow-[8px_8px_0px_0px_#ffffff] transform -rotate-2">
                        <h3 className="text-2xl font-black mb-4">READY TO WORK TOGETHER?</h3>
                        <p className="font-bold text-lg mb-6">
                            LET'S BUILD SOMETHING AMAZING WITH THESE SKILLS!
                        </p>
                        <button className="bg-red-500 text-white px-8 py-4 font-black text-xl border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:scale-105 hover:-translate-y-2 transition-all duration-200">
                            START A PROJECT
                        </button>
                    </div>
                </div>

                {/* Learning Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-400 to-green-400 p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform rotate-2">
                    <div className="text-center">
                        <h3 className="text-2xl font-black text-black mb-4">CURRENTLY LEARNING</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['RUST', 'GRAPHQL', 'KUBERNETES', 'MACHINE LEARNING'].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-white text-black px-4 py-2 font-black border-4 border-black shadow-[4px_4px_0px_0px_#000000] animate-pulse"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills