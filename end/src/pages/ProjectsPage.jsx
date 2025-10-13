import { useLoaderData, Link } from 'react-router-dom'

export const ProjectsPage = () => {
    const { projects } = useLoaderData()
    const featuredProjects = projects.filter(p => p.featured)

    return (
        <section className="py-20 bg-blue-300 border-t-8 border-b-8 border-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-24 h-24 bg-orange-400 border-4 border-black transform rotate-12"></div>
                <div className="absolute top-40 right-10 w-20 h-20 bg-red-500 border-4 border-black transform -rotate-45"></div>
                <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-yellow-400 border-4 border-black transform rotate-45"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="inline-block text-5xl md:text-6xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform rotate-2">
                        MY PROJECTS
                    </h2>
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-3xl font-black text-black mb-8 text-center bg-yellow-400 inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform -rotate-1">
                        FEATURED WORK
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} featured={true} />
                        ))}
                    </div>
                </div>

                {/* All Projects */}
                <div>
                    <h3 className="text-3xl font-black text-black mb-8 text-center bg-green-400 inline-block px-6 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000000] transform rotate-1">
                        ALL PROJECTS
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} featured={false} />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-pink-400 to-yellow-400 p-8 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform -rotate-1">
                    <div className="text-center">
                        <h3 className="text-3xl font-black text-black mb-4">LIKE WHAT YOU SEE?</h3>
                        <p className="text-xl font-bold text-black mb-6">
                            LET'S COLLABORATE ON YOUR NEXT BIG PROJECT!
                        </p>
                        <Link
                            to="/contact"
                            className="bg-black text-white px-6 py-3 font-black border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:scale-105 transition-all duration-200 no-underline"
                        >
                            START A PROJECT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project, index, featured }) => {
    return (
        <div
            className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0`}
        >
            <Link to={`/projects/${project.id}`} className="no-underline">
                <div className={`${project.color} p-6 border-8 border-black shadow-[8px_8px_0px_0px_#000000] group-hover:shadow-[12px_12px_0px_0px_#000000] transition-all duration-300 relative`}>
                    {featured && (
                        <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 font-black text-sm border-4 border-black shadow-[4px_4px_0px_0px_#000000] transform rotate-12">
                            FEATURED
                        </div>
                    )}

                    {/* Project Image Placeholder */}
                    <div className="w-full h-48 bg-black border-4 border-white mb-6 flex items-center justify-center">
                        <span className="text-white font-black text-2xl">IMG</span>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                        <h3 className={`text-2xl font-black ${project.textColor}`}>
                            {project.title}
                        </h3>

                        <p className={`font-bold ${project.textColor}`}>
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-black text-white px-3 py-1 text-sm font-black border-2 border-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex space-x-3 pt-4">
                            <button className="bg-white text-black px-4 py-2 font-black border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}