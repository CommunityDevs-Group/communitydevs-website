import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; 
import TeamCard from "./TeamCard";

import firuzeImg from "@/assets/images/team/1.png";
import fironiImg from "@/assets/images/team/2.png";
import ugurImg from "@/assets/images/team/3.png";
import nasraddinImg from "@/assets/images/team/4.jpg";
import saidImg from "@/assets/images/team/5.jpg";
import adilImg from "@/assets/images/team/6.jpg";
import canerImg from "@/assets/images/team/7.jpg";
import nihatImg from "@/assets/images/team/8.jpg";
import eminImg from "@/assets/images/team/9.jpg";

export default function Team() {
  const { t, i18n } = useTranslation();

  const teamMembers = [
    {
      name: "Fironi Habibzade",
      role: t('team.roles.tech_lead'),
      description: t('team.descriptions.fironi'),
      image: fironiImg,
      socials: {
        instagram: "https://www.instagram.com/codingwithfiro",
        portfolio: "https://fironihabib.bio",
        linkedin: "https://www.linkedin.com/in/fironi-habibzade-575283263",
        github: "https://github.com/fironihabib",
      },
    },
    {
      name: "Nihat Hasanli",
      role: t('team.roles.frontend'),
      description: t('team.descriptions.nihat'),
      image: nihatImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/nihat-hesenli-b9b7a9305/",
        github: "https://github.com/Nihat-Hesenli",
      },
    },
    {
      name: "Ughur Huseynaliyev",
      role: t('team.roles.frontend'),
      description: t('team.descriptions.ugur'),
      image: ugurImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/ugur-huseynaliyev-562038278/",
        github: "https://github.com/ugurhuseynaliyev",
      },
    },
    {
      name: "Nasraddin Guseinov",
      role: t('team.roles.frontend'),
      description: t('team.descriptions.nasraddin'),
      image: nasraddinImg,
      socials: {
        linkedin: "https://www.linkedin.com/in/nasradin-guseinovi-8b5ba5362/",
        github: "https://github.com/Nasradin24",
      },
    },
    {
      name: "Adil Abtalibov",
      role: t('team.roles.frontend'),
      description: t('team.descriptions.adil'),
      image: adilImg,
      socials: {
        instagram: "https://www.instagram.com/abtalib0v",
        behance: "https://www.behance.net/adilabtalibov",
        linkedin: "https://www.linkedin.com/in/adil-abtalibov",
        github: "https://github.com/Abtalib0v",
      },
    },
    {
      name: "Caner Shanli",
      role: t('team.roles.design_lead'),
      description: t('team.descriptions.caner'),
      image: canerImg,
      socials: {
        instagram: "https://www.instagram.com/ui.caner",
        behance: "https://www.behance.net/canersanli",
        linkedin: "https://www.linkedin.com/in/canersanli",
      },
    },
    {
      name: "Firuze Mansurzade",
      role: t('team.roles.uiux'),
      description: t('team.descriptions.firuze'),
      image: firuzeImg,
      socials: {
        instagram: "https://www.instagram.com/designer.fira",
        behance: "https://www.behance.net/firuzemansurz",
        linkedin: "https://www.linkedin.com/in/firuze-mansurzade-856908263/",
      },
    },
    {
      name: "Said Abtalibov",
      role: t('team.roles.graphic'),
      description: t('team.descriptions.said'),
      image: saidImg,
      socials: {
        instagram: "https://www.instagram.com/_abtal1b0v_",
        behance: "https://www.behance.net/seidabtalibov",
        linkedin: "https://www.linkedin.com/in/s%C9%99id-abtal%C4%B1bov-1330b6353",
      },
    },
    {
      name: "Emin Seyidov",
      role: t('team.roles.motion'),
      description: t('team.descriptions.emin'),
      image: eminImg,
      socials: {
        instagram: "https://www.instagram.com/emin_seyidovart",
        behance: "https://www.behance.net/eminseyidov20",
        linkedin: "https://www.linkedin.com/in/emin-seyidov-560472323",
      },
    },
  ];

  return (
    <section id="team" className="scroll-mt-20 w-full py-12 md:py-20 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          key={i18n.language}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-dm-sans text-[36px] md:text-[48px] font-bold text-[#170F49] leading-tight">
            {t('team.title')}
          </h2>
          <p className="font-dm-sans text-[16px] md:text-[20px] font-medium text-[#4E4B66] mt-3 opacity-80">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}