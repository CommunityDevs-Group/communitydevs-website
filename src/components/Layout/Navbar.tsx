import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/images/Logo.png";
import languageIcon from "@/assets/images/Language--Streamline-Outlined-Material-Symbols 1.png";

import azFlag from "@/assets/images/azerbaijan-flag.jpg";
import enFlag from "@/assets/images/United-kingdom-flag.jpg";
import ruFlag from "@/assets/images/Russia-flag.jpg";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'az', label: 'Azerbaijani', flag: azFlag },
    { code: 'en', label: 'English', flag: enFlag },
    { code: 'ru', label: 'Russian', flag: ruFlag }
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-[#F3F0FF]/80 backdrop-blur-md rounded-b-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-9 h-10 rounded-full overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-500 font-medium">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-black">{t('nav.home')}</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-black">{t('nav.about')}</a>
            <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="hover:text-black">{t('nav.events')}</a>
            <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-black">{t('nav.team')}</a>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1.5 cursor-pointer text-gray-700 p-2"
              >
                <img src={languageIcon} alt="Language" className="w-5 h-5" />
                <span className="text-xs uppercase font-bold">{i18n.language}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl py-2 border border-gray-100 z-[110]">
                  {languages.map((lang) => (
                    <div 
                      key={lang.code} 
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }} 
                      className="flex items-center gap-3 px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors"
                    >
                      <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full object-cover" />
                      <span className="text-sm font-medium">{lang.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="hidden md:block bg-[#6366F1] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#5254e2]">
              {t('nav.join')}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 outline-none p-1">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-600 font-medium py-2">{t('nav.home')}</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-gray-600 font-medium py-2">{t('nav.about')}</a>
          <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="block text-gray-600 font-medium py-2">{t('nav.events')}</a>
          <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="block text-gray-600 font-medium py-2">{t('nav.team')}</a>
          
          <button className="w-full bg-[#6366F1] text-white py-3 rounded-full font-semibold">
            {t('nav.join')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;