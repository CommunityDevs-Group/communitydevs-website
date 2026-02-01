// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import people from "@/assets/images/People.png";
// import { Instagram, Linkedin, Send, Github, Box } from 'lucide-react';

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <section id="home" className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto font-sans">
//       <div className="flex-1 space-y-6 text-center md:text-left">
//         <p className="text-gray-600 font-medium text-lg">
//           {t('hero.subtitle')}
//         </p>
//         <h1 className="text-5xl md:text-7xl font-bold text-[#1e1b4b] leading-tight">
//           {t('hero.title')}
//         </h1>
//         <p className="text-gray-500 text-xl">
//           {t('hero.description')}
//         </p>
//         <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
//           {t('hero.button')}
//         </button>
//       </div>

//       <div className="flex-1 flex flex-col items-center mt-12 md:mt-0">
//         <img 
//           src={people} 
//           alt="Developer community illustration" 
//           className="w-full max-w-lg h-auto"
//         />
        
//         <div className="flex gap-4 mt-8">
//           <a href="https://www.instagram.com/communitydevs.group" target="_blank" rel="noreferrer" 
//              className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
//             <Instagram size={20} />
//           </a>
//           <a href="https://www.linkedin.com/company/communitydevs-group/" target="_blank" rel="noreferrer" 
//              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all">
//             <Linkedin size={20} />
//           </a>
//           <a href="https://t.me" target="_blank" rel="noreferrer" 
//              className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all">
//             <Send size={20} />
//           </a>
//           <a href="https://github.com" target="_blank" rel="noreferrer" 
//              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
//             <Github size={20} />
//           </a>
//           <a href="https://behance.net" target="_blank" rel="noreferrer" 
//              className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#053eff] hover:bg-[#053eff] hover:text-white transition-all">
//             <Box size={20} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { useTranslation } from 'react-i18next';
import people from "@/assets/images/People.png";
import { Instagram, Linkedin, Send, Github } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto font-sans">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <p className="text-gray-600 font-medium text-lg">
          {t('hero.subtitle')}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#1e1b4b] leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-gray-500 text-xl">
          {t('hero.description')}
        </p>
        <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
          {t('hero.button')}
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center mt-12 md:mt-0">
        <img 
          src={people} 
          alt="Developer community illustration" 
          className="w-full max-w-lg h-auto"
        />
        
        <div className="flex gap-4 mt-8">
          <a href="https://www.instagram.com/communitydevs.group" target="_blank" rel="noreferrer" 
             className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/company/communitydevs-group/" target="_blank" rel="noreferrer" 
             className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all">
            <Linkedin size={20} />
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" 
             className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all">
            <Send size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" 
             className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
            <Github size={20} />
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer" 
             className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#053eff] hover:bg-[#053eff] hover:text-white transition-all">
            <FaBehance size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;