import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/images/Ekran Resmi 2025-12-25 06.39.50 1.png";
import languageIcon from "@/assets/images/Language--Streamline-Outlined-Material-Symbols 1.png";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'az', label: 'Azerbaijan' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' }
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-[#F3F0FF]/80 backdrop-blur-md rounded-t-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-9 h-10 rounded-full overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-500 font-medium">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} style={{marginRight:"25px"}} className="hover:text-black transition-colors">{t('nav.home')}</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} style={{marginRight:"25px"}} className="hover:text-black transition-colors">{t('nav.about')}</a>
            <a href="#events" onClick={(e) => handleScroll(e, 'events')} style={{marginRight:"25px"}} className="hover:text-black transition-colors">{t('nav.events')}</a>
            <a href="#team" onClick={(e) => handleScroll(e, 'team')} style={{marginRight:"25px"}} className="hover:text-black transition-colors">{t('nav.team')}</a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group py-4">
              <div className="flex items-center space-x-1 cursor-pointer text-gray-700">
                <img src={languageIcon} alt="Language" className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">{i18n.language}</span>
              </div>
              
              <div className="absolute right-0 top-full w-32 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50 pt-2">
                <ul className="bg-white shadow-lg rounded-lg py-2 text-sm text-gray-700 border border-gray-100">
                  {languages.map((lang) => (
                    <li 
                      key={lang.code} 
                      onClick={() => i18n.changeLanguage(lang.code)} 
                      className="px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer uppercase"
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="bg-[#6366F1] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#5254e2] transition-colors">
              {t('nav.join')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4`}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-600 font-medium">{t('nav.home')}</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-gray-600 font-medium">{t('nav.about')}</a>
        <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="block text-gray-600 font-medium">{t('nav.events')}</a>
        <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="block text-gray-600 font-medium">{t('nav.team')}</a>
        
        <hr className="border-gray-100" />
        
        <div className="flex space-x-4">
          {languages.map((lang) => (
            <button 
              key={lang.code} 
              onClick={() => i18n.changeLanguage(lang.code)} 
              className={`uppercase text-xs font-bold ${i18n.language === lang.code ? 'text-[#6366F1]' : 'text-gray-400'}`}
            >
              {lang.code}
            </button>
          ))}
        </div>

        <button className="w-full bg-[#6366F1] text-white py-3 rounded-full font-semibold">
          {t('nav.join')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;