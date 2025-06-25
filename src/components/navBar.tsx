import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, ShoppingCart, User } from "lucide-react"

export default function HeaderNav() {
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // État pour le dropdown

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

  return (
    <header className="w-full h-20 flex flex-row items-center bg-white py-4 px-6 border-b border-gray-100 shadow-sm shadow-orange-700 sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-10">
          <Link to="/">
            <div className="relative w-16 h-16">
              <Link to={`/`}><img src="/images/logo.png" alt="Logo V.A" /></Link>
            </div>
          </Link>
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
              className="text-gray-800 hover:text-red-600 font-medium focus:outline-none"
            >
              Collections
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48">
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

        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
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
      </div>
    </header>
  )
}