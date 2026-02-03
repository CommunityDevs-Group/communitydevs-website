// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import AboutPhoto from '../assets/images/AboutComDevs.png';

// const About: React.FC = () => {
//   const { t } = useTranslation();
//   return (
//     <div className='w-full min-h-screen bg-white flex items-center justify-center p-4 font-dm-sans mb-14'>
//       <div className='w-full max-w-[1336px] flex flex-col items-center justify-center'>
//         <h1 className='text-[#170F49] text-[30px] md:text-[50px] font-semibold mb-20'>{t('about.title')}</h1>
//         <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-[250px] relative mt-7'>
//           <div className='w-full md:w-1/2 flex justify-center'>
//             <img className='w-full max-w-[300px] sm:max-w-[600px] h-auto object-contain' src={AboutPhoto} alt="About" />
//           </div>
//           <div className='w-full lg:w-1/2 flex flex-col gap-4'>
//             <p className='text-[20px] font-medium text-[#4E4B66]'>{t('about.who')}</p>
//             <p className='text-[18px] lg:text-[25px] font-normal text-[#4E4B66] leading-8'>{t('about.p1')}</p>
//             <p className='text-[18px] lg:text-[25px] font-medium text-[#4E4B66] leading-8'>{t('about.p2')}</p>
//             <p className='text-[18px] font-light text-[#6868F4] mt-5'>{t('about.p3')}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;
import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutPhoto from '../assets/images/AboutComDevs.png';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className='scroll-mt-20 w-full min-h-screen bg-white flex items-center justify-center p-4 font-dm-sans mb-14'>
      <div className='w-full max-w-[1336px] flex flex-col items-center justify-center'>
        <h1 className='text-[#170F49] text-[30px] md:text-[50px] font-semibold mb-20'>{t('about.title')}</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-[250px] mt-7'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <img className='w-full max-w-[600px] h-auto transition-all hover:-translate-y-3 cursor-pointer drop-shadow-xl' src={AboutPhoto} alt="About" />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col gap-4 lg:items-start'>
            <p className='text-[22px] font-medium text-[#4E4B66] mb-6'>{t('about.who')}</p>
            <p className='text-[18px] lg:text-[25px] font-normal text-[#4E4B66] leading-8 mb-8'>{t('about.p1')}</p>
            <p className='text-[18px] lg:text-[25px] font-medium text-[#4E4B66] leading-8'>{t('about.p2')}</p>
            <p className='text-[18px] lg:text-[25px] font-light text-[#6868F4] mt-5'>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;