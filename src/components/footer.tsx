import { Facebook, Instagram, Music, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-gray-100 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 20,90 80,90" fill="none" stroke="#CC0000" strokeWidth="6" />
                  <polygon points="50,90 20,10 80,10" fill="none" stroke="#CC0000" strokeWidth="6" />
                </svg>
              </div>
            </div>
  
            {/* About */}
            <div>
              <h3 className="text-red-800 font-bold mb-4">A PROPPOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/notre-mission" className="text-gray-700 hover:text-red-600">
                    NOTRE MISSION
                  </Link>
                </li>
                <li>
                  <Link to="/nos-valeurs" className="text-gray-700 hover:text-red-600">
                    NOS VALEURS
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-red-800 font-bold mb-4">CONTACTEZ-NOUS</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">+4238 1291 9502</li>
                <li>
                  <a href="mailto:venuedailleurs@gmail.com" className="text-gray-700 hover:text-red-600">
                    venuedailleurs@gmail.com
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-4">
              <Link to="https://facebook.com" className="text-gray-700 hover:text-red-600">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://instagram.com" className="text-gray-700 hover:text-red-600">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://X.com" className="text-gray-700 hover:text-red-600">
                <X className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="https://tiktok.com" className="text-gray-700 hover:text-red-600">
                <Music className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
  
          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">©2024 by gls</div>
        </div>
      </footer>
    )
  }
  