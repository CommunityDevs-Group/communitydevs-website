import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import people from "@/assets/images/People.png";
import { Instagram, Linkedin, Send, Github } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();
  const telegramLink = "https://t.me/+3VP4bRzeRwU2ODhi";
  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/communitydevs.group", color: "text-pink-600", bg: "bg-pink-100", hover: "hover:bg-pink-600" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/communitydevs-group/", color: "text-blue-700", bg: "bg-blue-100", hover: "hover:bg-blue-700" },
    { icon: <Send size={20} />, href: telegramLink, color: "text-sky-500", bg: "bg-sky-100", hover: "hover:bg-sky-500" },
    { icon: <Github size={20} />, href: "https://github.com/communitydevs-group", color: "text-gray-900", bg: "bg-gray-100", hover: "hover:bg-gray-900" },
    { icon: <FaBehance size={20} />, href: "https://www.behance.net/communitydevs", color: "text-[#053eff]", bg: "bg-blue-50", hover: "hover:bg-[#053eff]" }
  ];

  return (
    <section id="home" className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto font-sans overflow-hidden">
      
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <p className="text-[#6366f1] font-bold text-sm uppercase tracking-[0.2em]">
          {t('hero.subtitle')}
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#170F49] leading-[1.1] tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="text-[#6F6C90] text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="pt-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6366f1] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_25px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.4)]"
          >
            {t('hero.button')}
          </motion.a>
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col items-center mt-12 md:mt-0 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={people} 
          alt="Community Devs Team Illustration" 
          className="w-full max-w-lg h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        />
        
        <div className="flex gap-4 mt-12">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              whileHover={{ 
                y: -10, 
                scale: 1.15,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full ${social.bg} flex items-center justify-center ${social.color} ${social.hover} hover:text-white transition-colors duration-200 shadow-sm border border-white/50`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;