function Contact() {
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input className="border border-gray-300 p-2 w-full" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-300 p-2 w-full" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="border border-gray-300 p-2 w-full" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;