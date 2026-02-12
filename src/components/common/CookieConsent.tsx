import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react"; 

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={i18n.language} 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[200]"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-indigo-50 shadow-[0_20px_50px_rgba(99,102,241,0.18)] rounded-2xl p-6 relative overflow-hidden group">
            
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-50 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-700" />
            
            <div className="flex items-start gap-4 relative">
              <div className="bg-indigo-100 p-3 rounded-xl text-[#6366F1] shadow-inner">
                <Cookie size={24} />
              </div>
              
              <div className="flex-1">
                <h4 className="text-[#170F49] font-bold text-sm mb-1 uppercase tracking-tight">
                  {t('cookies.title', 'We Love Cookies!')}
                </h4>
                <p className="text-[#6F6C90] text-[11px] leading-relaxed font-medium">
                  {t('cookies.description', 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.')}
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-[#6366F1] text-white text-[10px] font-black py-2.5 rounded-xl hover:bg-[#5254e2] transition-all active:scale-95 shadow-lg shadow-indigo-100 uppercase tracking-widest"
                  >
                    {t('cookies.accept', 'Accept All')}
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="px-3 py-2 text-[#4E4B66] text-[10px] font-bold hover:text-black transition-colors uppercase"
                  >
                    {t('cookies.decline', 'Close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;