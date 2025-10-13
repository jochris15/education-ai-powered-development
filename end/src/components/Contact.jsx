import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('MESSAGE SENT! I\'LL GET BACK TO YOU SOON!')
    }

    const contactInfo = [
        {
            label: 'EMAIL',
            value: 'john.doe@email.com',
            icon: '📧',
            color: 'bg-red-500'
        },
        {
            label: 'PHONE',
            value: '+1 (555) 123-4567',
            icon: '📱',
            color: 'bg-green-400'
        },
        {
            label: 'LOCATION',
            value: 'New York, USA',
            icon: '📍',
            color: 'bg-blue-500'
        },
        {
            label: 'RESPONSE TIME',
            value: '< 24 Hours',
            icon: '⚡',
            color: 'bg-purple-500'
        }
    ]

    return (
        <section className="py-20 bg-orange-300 border-t-8 border-b-8 border-black relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-28 h-28 bg-pink-500 border-4 border-black transform rotate-12"></div>
                <div className="absolute top-40 left-20 w-20 h-20 bg-yellow-400 border-4 border-black transform -rotate-45"></div>
                <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-blue-500 border-4 border-black transform rotate-45"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="inline-block text-5xl md:text-6xl font-black text-black bg-white px-8 py-4 border-8 border-black shadow-[12px_12px_0px_0px_#000000] transform rotate-2">
                        LET'S CONNECT
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
                        <h3 className="text-3xl font-black text-black mb-8 text-center">
                            SEND ME A MESSAGE
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-black font-black mb-2">NAME *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-4 border-4 border-black font-bold text-black focus:outline-none focus:ring-0 focus:border-red-500 shadow-[4px_4px_0px_0px_#000000]"
                                        placeholder="YOUR NAME"
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-black mb-2">EMAIL *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-4 border-4 border-black font-bold text-black focus:outline-none focus:ring-0 focus:border-red-500 shadow-[4px_4px_0px_0px_#000000]"
                                        placeholder="YOUR EMAIL"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-black font-black mb-2">SUBJECT *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 border-4 border-black font-bold text-black focus:outline-none focus:ring-0 focus:border-red-500 shadow-[4px_4px_0px_0px_#000000]"
                                    placeholder="PROJECT SUBJECT"
                                />
                            </div>

                            <div>
                                <label className="block text-black font-black mb-2">MESSAGE *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    className="w-full p-4 border-4 border-black font-bold text-black focus:outline-none focus:ring-0 focus:border-red-500 shadow-[4px_4px_0px_0px_#000000] resize-none"
                                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 text-white py-4 font-black text-xl border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:scale-105 hover:-translate-y-2 transition-all duration-200 hover:shadow-[8px_8px_0px_0px_#000000]"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className={`${info.color} text-white p-6 border-8 border-black shadow-[6px_6px_0px_0px_#000000] transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                                        }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl">{info.icon}</span>
                                        <div>
                                            <h4 className="font-black text-lg">{info.label}</h4>
                                            <p className="font-bold">{info.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="bg-black text-white p-8 border-8 border-white shadow-[8px_8px_0px_0px_#ffffff] transform rotate-2">
                            <h4 className="text-2xl font-black mb-6 text-center">FOLLOW ME</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'GITHUB', color: 'bg-gray-800' },
                                    { name: 'LINKEDIN', color: 'bg-blue-600' },
                                    { name: 'TWITTER', color: 'bg-sky-500' },
                                    { name: 'DRIBBBLE', color: 'bg-pink-500' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`${social.color} text-white p-4 font-black text-center border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:scale-105 hover:-translate-y-1 transition-all duration-200 block`}
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="bg-green-400 text-black p-6 border-8 border-black shadow-[6px_6px_0px_0px_#000000] text-center transform -rotate-1">
                            <div className="flex items-center justify-center space-x-3 mb-3">
                                <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                                <h4 className="text-xl font-black">AVAILABLE FOR WORK</h4>
                            </div>
                            <p className="font-bold">
                                I'M CURRENTLY ACCEPTING NEW PROJECTS AND COLLABORATIONS!
                            </p>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-yellow-400 text-black p-6 border-8 border-black shadow-[6px_6px_0px_0px_#000000] text-center transform rotate-1">
                            <h4 className="text-xl font-black mb-4">NEED QUICK HELP?</h4>
                            <button className="bg-black text-white px-6 py-3 font-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:scale-105 transition-all duration-200">
                                SCHEDULE A CALL
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-purple-500 text-white p-8 border-8 border-black shadow-[8px_8px_0px_0px_#000000] transform -rotate-1">
                    <h3 className="text-3xl font-black text-center mb-8">FREQUENTLY ASKED</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h4 className="font-black text-lg mb-2">RESPONSE TIME?</h4>
                            <p className="font-bold">WITHIN 24 HOURS</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-black text-lg mb-2">PROJECT TIMELINE?</h4>
                            <p className="font-bold">2-8 WEEKS TYPICAL</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-black text-lg mb-2">BUDGET RANGE?</h4>
                            <p className="font-bold">LET'S DISCUSS YOUR NEEDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact