const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'HOME', href: '#' },
        { name: 'ABOUT', href: '#' },
        { name: 'PROJECTS', href: '#' },
        { name: 'CONTACT', href: '#' }
    ]

    const services = [
        'WEB DEVELOPMENT',
        'UI/UX DESIGN',
        'MOBILE APPS',
        'CONSULTING'
    ]

    return (
        <footer className="bg-black text-white border-t-8 border-red-500 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-20 h-20 bg-yellow-400 border-4 border-white transform rotate-12"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-red-500 border-4 border-white transform -rotate-45"></div>
                <div className="absolute top-32 left-1/3 w-12 h-12 bg-green-400 border-4 border-white transform rotate-45"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-red-500 text-white px-6 py-4 border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] transform -rotate-2 mb-6">
                            <h3 className="text-2xl font-black">JOHN DOE</h3>
                            <p className="font-bold">DEVELOPER</p>
                        </div>
                        <p className="font-bold text-white mb-6">
                            CREATING BOLD DIGITAL EXPERIENCES THAT MAKE AN IMPACT.
                            LET'S BUILD SOMETHING AMAZING TOGETHER!
                        </p>
                        <div className="flex space-x-3">
                            {['📧', '📱', '🌐'].map((icon, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 bg-white text-black flex items-center justify-center border-4 border-yellow-400 shadow-[4px_4px_0px_0px_#facc15] text-xl hover:scale-110 transition-all duration-200 cursor-pointer"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="bg-green-400 text-black px-4 py-2 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] transform rotate-1 mb-6 inline-block">
                            <h4 className="font-black text-lg">QUICK LINKS</h4>
                        </div>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-bold text-white hover:text-yellow-400 transition-colors duration-200 hover:underline"
                                    >
                                        → {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <div className="bg-purple-500 text-white px-4 py-2 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] transform -rotate-1 mb-6 inline-block">
                            <h4 className="font-black text-lg">SERVICES</h4>
                        </div>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="font-bold text-white">
                                    • {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <div className="bg-yellow-400 text-black px-4 py-2 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] transform rotate-2 mb-6 inline-block">
                            <h4 className="font-black text-lg">STAY UPDATED</h4>
                        </div>
                        <p className="font-bold text-white mb-4">
                            GET THE LATEST UPDATES ON MY PROJECTS AND TECH INSIGHTS!
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="w-full p-3 border-4 border-white bg-black text-white font-bold placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                            />
                            <button className="w-full bg-red-500 text-white py-3 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:scale-105 transition-all duration-200">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-16 pt-8 border-t-4 border-white">
                    <div className="text-center">
                        <h4 className="text-2xl font-black text-white mb-6">CONNECT WITH ME</h4>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {[
                                { name: 'GITHUB', color: 'bg-gray-800', link: '#' },
                                { name: 'LINKEDIN', color: 'bg-blue-600', link: '#' },
                                { name: 'TWITTER', color: 'bg-sky-500', link: '#' },
                                { name: 'DRIBBBLE', color: 'bg-pink-500', link: '#' },
                                { name: 'BEHANCE', color: 'bg-blue-500', link: '#' },
                                { name: 'CODEPEN', color: 'bg-green-600', link: '#' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    className={`${social.color} text-white px-6 py-3 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:scale-110 hover:-translate-y-1 transition-all duration-200 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                        } hover:rotate-0`}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-red-500 to-purple-500 p-8 border-8 border-white shadow-[8px_8px_0px_0px_#ffffff] transform -rotate-1">
                    <div className="text-center">
                        <h3 className="text-3xl font-black text-white mb-4">
                            READY TO START YOUR PROJECT?
                        </h3>
                        <p className="text-xl font-bold text-white mb-6">
                            LET'S TURN YOUR IDEAS INTO REALITY!
                        </p>
                        <button className="bg-yellow-400 text-black px-8 py-4 font-black text-xl border-4 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:scale-105 hover:-translate-y-2 transition-all duration-200">
                            GET STARTED NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t-4 border-white bg-red-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="font-black text-white text-lg">
                                © {currentYear} JOHN DOE. ALL RIGHTS RESERVED.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-center">
                            <a href="#" className="text-white font-bold hover:text-yellow-300 transition-colors">
                                PRIVACY POLICY
                            </a>
                            <span className="text-white">|</span>
                            <a href="#" className="text-white font-bold hover:text-yellow-300 transition-colors">
                                TERMS OF SERVICE
                            </a>
                            <span className="text-white">|</span>
                            <a href="#" className="text-white font-bold hover:text-yellow-300 transition-colors">
                                SITEMAP
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-yellow-400 text-black p-4 font-black border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[8px_8px_0px_0px_#000000]"
                >
                    ↑ TOP
                </button>
            </div>
        </footer>
    )
}

export default Footer