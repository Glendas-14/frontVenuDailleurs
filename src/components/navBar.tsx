import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react"

export default function HeaderNav() {
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Recherche:", searchValue)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <header className="w-full h-20 flex flex-row items-center bg-white py-4 px-6 border-b border-gray-100 shadow-sm shadow-orange-700 sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-10 md:mr-10">
          <Link to="/">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Link to={`/`}><img src="/images/logo.png" alt="Logo V.A" /></Link>
            </div>
          </Link>
        </div>

        {/* Search Bar - Mobile (between logo and burger) */}
        <div className="flex-1 flex justify-center md:hidden mx-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xs">
            <div className="relative">
              <input
                type="text"
                placeholder="Recherche"
                value={searchValue}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 rounded-full border border-coral-400 focus:outline-none focus:ring-2 focus:ring-orange-700 text-sm"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">
            Acceuil
          </Link>
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">
            A propos
          </Link>
          <Link to="/articles" className="text-gray-800 hover:text-red-600 font-medium">
            Articles
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 text-gray-800 hover:text-red-600 font-medium focus:outline-none"
            >
              <span>Collections</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48 z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/collections"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600"
                    >
                      Toutes les collections
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/collection1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600"
                    >
                      Venu d'ailleurs style
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/collection2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600"
                    >
                      DMF style
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/collection3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600"
                    >
                      Personal Art
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/collection4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600"
                    >
                      Mode et Actu
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">
            Contact
          </Link>
        </nav>

        {/* Search and Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Recherche"
                value={searchValue}
                onChange={handleSearchChange}
                className="w-64 py-2 pl-10 pr-4 rounded-full border border-coral-400 focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </form>

          {/* Cart Icon */}
          <Link to="/panier" className="relative">
            <ShoppingCart className="h-7 w-7 text-red-500" />
            <span className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </Link>

          {/* User Icon */}
          <Link to="/register" className="border-l pl-6 border-gray-300">
            <User className="h-7 w-7 text-gray-800" />
          </Link>
        </div>

        {/* Mobile Icons and Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Mobile Cart Icon */}
          <Link to="/panier" className="relative">
            <ShoppingCart className="h-6 w-6 text-red-500" />
            <span className="absolute -bottom-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
            onClick={closeMobileMenu}
          >
            Acceuil
          </Link>
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
            onClick={closeMobileMenu}
          >
            A propos
          </Link>
          <Link
            to="/articles"
            className="block px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
            onClick={closeMobileMenu}
          >
            Articles
          </Link>
          
          {/* Mobile Collections Dropdown */}
          <div className="space-y-1">
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
            >
              <span>Collections</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 space-y-1">
                <Link
                  to="/collections"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Toutes les collections
                </Link>
                <Link
                  to="/collection1"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Venu d'ailleurs style
                </Link>
                <Link
                  to="/collection2"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  DMF style
                </Link>
                <Link
                  to="/collection3"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Personal Art
                </Link>
                <Link
                  to="/collection4"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Mode et Actu
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          
          {/* Mobile User Link */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <Link
              to="/register"
              className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:text-red-600 hover:bg-gray-50 font-medium"
              onClick={closeMobileMenu}
            >
              <User className="h-5 w-5 mr-3" />
              Mon compte
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}