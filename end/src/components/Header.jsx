import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;