import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'projects', label: 'PROJECTS', path: '/projects' },
    { id: 'skills', label: 'SKILLS', path: '/skills' },
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-black border-b-8 border-red-500 shadow-[8px_8px_0px_0px_#ef4444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/"
            className="cursor-pointer no-underline"
          >
            <h1 className="text-3xl font-black text-white bg-red-500 px-4 py-2 transform -rotate-2 border-4 border-white shadow-[4px_4px_0px_0px_#ffffff]">
              PORTFOLIO
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-6 py-3 font-black text-lg border-4 transform transition-all duration-200 hover:scale-110 no-underline ${
                  currentSection === item.id
                    ? 'bg-red-500 text-white border-white shadow-[4px_4px_0px_0px_#ffffff] -translate-y-1'
                    : 'bg-white text-black border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-red-500 text-white px-4 py-2 border-4 border-white font-black text-xl shadow-[4px_4px_0px_0px_#ffffff]"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-6 py-3 font-black text-lg border-4 transform transition-all duration-200 no-underline ${
                    currentSection === item.id
                      ? 'bg-red-500 text-white border-white shadow-[4px_4px_0px_0px_#ffffff]'
                      : 'bg-white text-black border-black shadow-[4px_4px_0px_0px_#000000]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header