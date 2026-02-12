import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Loader from "../common/loader"; 

import logo from "@/assets/images/Ekran Resmi 2025-12-25 06.39.50 1.png";
import languageIcon from "@/assets/images/Language--Streamline-Outlined-Material-Symbols 1.png";

import azFlag from "@/assets/images/flag-azerbaijan.jpg";
import enFlag from "@/assets/images/flag-united-kingdom.jpg";
import ruFlag from "@/assets/images/Russian-flag.jpg";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = (code: string) => {
    setIsLoading(true);
    i18n.changeLanguage(code);
    setTimeout(() => {
      setIsLoading(false);
      setIsMenuOpen(false);
    }, 800);
  };

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
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-[100] bg-[#F3F0FF]/80 backdrop-blur-md rounded-t-2xl shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-9 h-10 rounded-full overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-gray-500 font-medium">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-black transition-colors">{t('nav.home')}</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-black transition-colors">{t('nav.about')}</a>
              <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="hover:text-black transition-colors">{t('nav.events')}</a>
              <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-black transition-colors">{t('nav.team')}</a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group py-2">
                <div className="flex items-center space-x-2 cursor-pointer px-4 py-2 bg-white/40 backdrop-blur-sm border border-indigo-100/50 rounded-full hover:bg-white hover:border-[#6366F1]/50 transition-all duration-300 shadow-sm">
                  <img src={languageIcon} alt="Language" className="w-4 h-4 opacity-70" />
                  <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#170F49]">{i18n.language}</span>
                  <ChevronDown className="w-3 h-3 text-indigo-400 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                
                <div className="absolute right-0 top-full w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-500 z-50 pt-3">
                  <ul className="bg-white/95 backdrop-blur-xl shadow-[0px_10px_30px_rgba(99,102,241,0.12)] rounded-2xl py-2 text-sm text-gray-700 border border-white overflow-hidden">
                    {languages.map((lang) => (
                      <li 
                        key={lang.code} 
                        onClick={() => changeLanguage(lang.code)} 
                        className={`flex items-center justify-between px-4 py-2.5 hover:bg-indigo-50/80 cursor-pointer transition-all ${
                          i18n.language === lang.code ? 'bg-indigo-50/50 text-[#6366F1]' : 'text-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full object-cover shadow-sm border border-gray-100" />
                          <span className={`text-[13px] ${i18n.language === lang.code ? 'font-bold' : 'font-medium'}`}>{lang.label}</span>
                        </div>
                        {i18n.language === lang.code && (
                          <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full shadow-[0_0_8px_#6366F1]" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button className="bg-[#6366F1] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#5254e2] transition-all active:scale-95 shadow-lg shadow-indigo-100">
                {t('nav.join')}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 outline-none transition-transform active:scale-90">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 overflow-hidden shadow-xl"
            >
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-gray-600 font-medium p-2 hover:bg-indigo-50 rounded-xl transition-colors">{t('nav.home')}</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-gray-600 font-medium p-2 hover:bg-indigo-50 rounded-xl transition-colors">{t('nav.about')}</a>
              <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="block text-gray-600 font-medium p-2 hover:bg-indigo-50 rounded-xl transition-colors">{t('nav.events')}</a>
              <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="block text-gray-600 font-medium p-2 hover:bg-indigo-50 rounded-xl transition-colors">{t('nav.team')}</a>
              
              <hr className="border-gray-100" />
              
              <div className="grid grid-cols-1 gap-2">
                <p className="text-[10px] uppercase font-bold text-gray-400 px-2 tracking-widest">{t('nav.language')}</p>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      i18n.language === lang.code ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={lang.flag} alt={lang.label} className="w-6 h-6 rounded-full object-cover" />
                      <span className={`text-sm ${i18n.language === lang.code ? 'text-[#6366F1] font-bold' : 'text-gray-600 font-medium'}`}>
                        {lang.label}
                      </span>
                    </div>
                    {i18n.language === lang.code && <div className="w-2 h-2 bg-[#6366F1] rounded-full" />}
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#6366F1] text-white py-3 rounded-full font-semibold shadow-lg shadow-indigo-100">
                {t('nav.join')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;