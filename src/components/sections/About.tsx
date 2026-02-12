import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; 
import AboutPhoto from '../../assets/images/AboutComDevs.png';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.section 
      key={i18n.language} 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about" 
      className='scroll-mt-20 w-full min-h-screen bg-white flex items-center justify-center p-4 font-dm-sans mb-14'
    >
      <div className='w-full max-w-[1336px] flex flex-col items-center justify-center'>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-[#170F49] text-[30px] md:text-[50px] font-semibold mb-20 text-center'
        >
          {t('about.title')}
        </motion.h2>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-[250px] mt-7'>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className='w-full md:w-1/2 flex justify-center'
          >
            <img 
              className='w-full max-w-[600px] h-auto transition-all duration-500 hover:-translate-y-3 cursor-pointer drop-shadow-2xl object-contain' 
              src={AboutPhoto} 
              alt="Community Devs About" 
            />
          </motion.div>

          <div className='w-full lg:w-1/2 flex flex-col gap-4 lg:items-start'>
            <motion.p 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className='text-[22px] font-medium text-[#4E4B66] mb-6'
            >
              {t('about.who')}
            </motion.p>
            <motion.p 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className='text-[18px] lg:text-[25px] font-normal text-[#4E4B66] leading-8 mb-8'
            >
              {t('about.p1')}
            </motion.p>
            <motion.p 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className='text-[18px] lg:text-[25px] font-medium text-[#4E4B66] leading-8'
            >
              {t('about.p2')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className='text-[18px] lg:text-[25px] font-light text-[#6868F4] mt-5'
            >
              {t('about.p3')}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;