import { useRouteError, Link } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError()

    console.error(error)

    return (
        <div className="min-h-screen bg-red-300 font-mono flex items-center justify-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-black border-8 border-white transform rotate-12 shadow-[8px_8px_0px_0px_#ffffff]"></div>
                <div className="absolute top-40 right-10 w-24 h-24 bg-yellow-400 border-8 border-black transform -rotate-45 shadow-[8px_8px_0px_0px_#000000]"></div>
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500 border-8 border-black transform rotate-45 shadow-[8px_8px_0px_0px_#000000]"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-400 border-8 border-black transform -rotate-12 shadow-[8px_8px_0px_0px_#000000]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Error Title */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[16px_16px_0px_0px_#000000] transform -rotate-2 inline-block">
                        OOPS!
                    </h1>
                </div>

                {/* Error Code */}
                <div className="mb-8">
                    <span className="text-6xl font-black text-white bg-black px-6 py-3 border-8 border-white shadow-[12px_12px_0px_0px_#ffffff] transform rotate-1 inline-block">
                        {error?.status || '404'}
                    </span>
                </div>

                {/* Error Message */}
                <div className="bg-yellow-400 text-black p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1 mb-8">
                    <h2 className="text-3xl font-black mb-4">
                        {error?.status === 404
                            ? 'PAGE NOT FOUND'
                            : error?.statusText || 'SOMETHING WENT WRONG'}
                    </h2>
                    <p className="text-xl font-bold">
                        {error?.status === 404
                            ? 'THE PAGE YOU\'RE LOOKING FOR DOESN\'T EXIST OR HAS BEEN MOVED.'
                            : error?.data || 'AN UNEXPECTED ERROR OCCURRED. DON\'T WORRY, IT\'S NOT YOU - IT\'S US!'}
                    </p>
                </div>

                {/* Suggested Actions */}
                <div className="space-y-6 mb-12">
                    <div className="bg-green-400 text-black p-6 border-8 border-black shadow-[6px_6px_0px_0px_#000000] transform rotate-2">
                        <h3 className="text-2xl font-black mb-4">WHAT CAN YOU DO?</h3>
                        <ul className="text-left font-bold space-y-2">
                            <li>• CHECK THE URL FOR TYPOS</li>
                            <li>• GO BACK TO THE HOMEPAGE</li>
                            <li>• BROWSE MY PROJECTS</li>
                            <li>• CONTACT ME IF THE PROBLEM PERSISTS</li>
                        </ul>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-6">
                    <Link
                        to="/"
                        className="bg-black text-white px-8 py-4 font-black text-xl border-8 border-white shadow-[8px_8px_0px_0px_#ffffff] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#ffffff] no-underline"
                    >
                        GO HOME
                    </Link>
                    <Link
                        to="/projects"
                        className="bg-purple-500 text-white px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] no-underline"
                    >
                        VIEW PROJECTS
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-orange-500 text-black px-8 py-4 font-black text-xl border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] no-underline"
                    >
                        CONTACT ME
                    </Link>
                </div>

                {/* Fun Error Animation */}
                <div className="mt-16 flex justify-center">
                    <div className="animate-bounce">
                        <div className="w-20 h-20 bg-red-500 border-8 border-black transform rotate-45 shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center">
                            <span className="text-white font-black text-2xl transform -rotate-45">!</span>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-600 text-white px-6 py-3 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:scale-105 transition-all duration-200"
                    >
                        ← GO BACK
                    </button>
                </div>
            </div>
        </div>
    )
}