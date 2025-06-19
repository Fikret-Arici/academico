import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="Academico" className="h-14 w-auto md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#anasayfa" className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200 font-medium">
              Anasayfa
            </a>
            <a href="#paketler" className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200 font-medium">
              Eğitim Paketleri
            </a>
            <a href="#koclar" className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200 font-medium">
              Koçlarımız
            </a>
            <a href="#hakkimizda" className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200 font-medium">
              Hakkımızda
            </a>
            <a href="#footer-iletisim" className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200 font-medium">
              İletişim
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button onClick={() => window.location.href = '/hemen-basla'} className="bg-[#F5B041] hover:bg-[#F39C12] text-[#1C1C1C] font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              Hemen Başla
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#anasayfa" className="block px-3 py-2 text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200">
                Anasayfa
              </a>
              <a href="#paketler" className="block px-3 py-2 text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200">
                Eğitim Paketleri
              </a>
              <a href="#koclar" className="block px-3 py-2 text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200">
                Koçlarımız
              </a>
              <a href="#hakkimizda" className="block px-3 py-2 text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200">
                Hakkımızda
              </a>
              <a href="#footer-iletisim" className="block px-3 py-2 text-[#1C1C1C] hover:text-[#C0392B] transition-colors duration-200">
                İletişim
              </a>
              <div className="px-3 py-2">
                <button onClick={() => window.location.href = '/hemen-basla'} className="w-full bg-[#F5B041] hover:bg-[#F39C12] text-[#1C1C1C] font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;