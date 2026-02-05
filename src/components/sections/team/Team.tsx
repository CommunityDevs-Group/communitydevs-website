// import TeamCard from "./TeamCard";

// import firuzeImg from "@/assets/images/team/1.png";
// import fironiImg from "@/assets/images/team/2.png";
// import ugurImg from "@/assets/images/team/3.png";
// import nasraddinImg from "@/assets/images/team/4.jpg";
// import saidImg from "@/assets/images/team/5.jpg";
// import adilImg from "@/assets/images/team/6.jpg";
// import canerImg from "@/assets/images/team/7.jpg";
// import nihatImg from "@/assets/images/team/8.jpg";
// import eminImg from "@/assets/images/team/9.jpg";

// const teamMembers = [
//   {
//   name: "Fironi Habibzade",
//   role: "Technical Lead",
//   description:
//     "Leading the team by designing and building reliable, scalable and high-quality software systems.",
//   image: fironiImg,
//   socials: {
//     instagram: "https://www.instagram.com/codingwithfiro?igsh=czNqajB2bnFhNWF6",
//     portfolio: "https://fironihabib.bio",
//     linkedin:  "https://www.linkedin.com/in/fironi-habibzade-575283263",
//     github:    "https://github.com/fironihabib",
//   },
// },

//   {
//     name: "Nihat Hasanli",
//     role: "Front-end Developer",
//     description:
//       "Enjoys turning complex problems into simple and elegant solutions.",
//     image: nihatImg,
//     socials: {
//     linkedin: "https://www.linkedin.com/in/nihat-hesenli-b9b7a9305/",
//     github:   "https://github.com/Nihat-Hesenli",
//   },
//   },
//   {
//     name: "Ughur Huseynaliyev",
//     role: "Front-end Developer",
//     description:
//       "Experienced in building reliable and high-performance backend systems.",
//     image: ugurImg,
//     socials: {
//     linkedin: "https://www.linkedin.com/in/ugur-huseynaliyev-562038278/",
//     github:   "https://github.com/ugurhuseynaliyev",
//   },
//   },
//   {
//     name: "Nasraddin Guseinov",
//     role: "Front-end Developer",
//     description:
//       "Focused on building interactive and user-friendly web interfaces.",
//     image: nasraddinImg,
//     socials: {
//     linkedin: "https://www.linkedin.com/in/nasradin-guseinovi-8b5ba5362/",
//     github:   "https://github.com/Nasradin24",
//   },
//   },
//   {
//     name: "Adil Abtalibov",
//     role: "Frontend Developer",
//     description:
//       "Passionate about modern frontend technologies and clean UI design.",
//     image: adilImg,
//     socials: {
//     instagram: "https://www.instagram.com/abtalib0v?igsh=ZjN1aWlueG5ucHM2",
//     behance:   "https://www.behance.net/adilabtalibov",
//     linkedin:  "https://www.linkedin.com/in/adil-abtalibov",
//     github:    "https://github.com/Abtalib0v",
//   },
//   },
//   {
//     name: "Caner Shanli",
//     role: "Design Team Lead",
//     description:
//       "Leading the design team with a strong focus on UX and product vision.",
//     image: canerImg,
//     socials: {
//     instagram: "https://www.instagram.com/ui.caner",
//     behance:   "https://www.behance.net/canersanli",
//     linkedin:  "https://www.linkedin.com/in/canersanli",
//   },
//   },
//   {
//     name: "Firuze Mansurzade",
//     role: "UI/UX Designer",
//     description:
//       "Passionate about creating intuitive and beautiful user experiences.",
//     image: firuzeImg,
//     socials: {
//     instagram: "https://www.instagram.com/designer.fira?igsh=dmJ1ZjRjb2RlNnh4&utm_source=qr",
//     behance:   "https://www.behance.net/firuzemansurz",
//     linkedin:  "https://www.linkedin.com/in/firuze-mansurzade-856908263/",
//   },
//   },
//   {
//     name: "Said Abtalibov",
//     role: "Graphic Designer",
//     description:
//       "Creative designer focused on branding and visual storytelling.",
//     image: saidImg,
//     socials: {
//     instagram: "https://www.instagram.com/_abtal1b0v_?igsh=dWkzcnFyYWVkaXA4",
//     behance:   "https://www.behance.net/seidabtalibov",
//     linkedin:  "https://www.linkedin.com/in/s%C9%99id-abtal%C4%B1bov-1330b6353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   },
//   {
//     name: "Emin Seyidov",
//     role: "Motion Designer",
//     description:
//       "Specialized in motion graphics and dynamic visual experiences.",
//     image: eminImg,
//     socials: {
//     instagram: "https://www.instagram.com/emin_seyidovart?igsh=ejRuYnB6a20xeWs2",
//     behance:   "https://www.behance.net/eminseyidov20",
//     linkedin:  "https://www.linkedin.com/in/emin-seyidov-560472323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   },
// ];

// export default function Team() {
//   return (
//     <section className="w-full py-24">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-dm-sans text-[48px] md:text-[80px] font-bold text-[#170F49] leading-none">
//             Our Team
//           </h2>

//           <p className="font-dm-sans text-[20px] md:text-[35px] font-medium text-[#4E4B66] mt-4">
//             Meet the people behind Community Devs
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {teamMembers.map((member, index) => (
//             <TeamCard key={index} {...member} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { useTranslation } from 'react-i18next';
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

const teamMembers = [
  {
    name: "Fironi Habibzade",
    role: "Technical Lead",
    description: "Leading the team by designing and building reliable, scalable and high-quality software systems.",
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
    role: "Front-end Developer",
    description: "Enjoys turning complex problems into simple and elegant solutions.",
    image: nihatImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/nihat-hesenli-b9b7a9305/",
      github: "https://github.com/Nihat-Hesenli",
    },
  },
  {
    name: "Ughur Huseynaliyev",
    role: "Front-end Developer",
    description: "Experienced in building reliable and high-performance backend systems.",
    image: ugurImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/ugur-huseynaliyev-562038278/",
      github: "https://github.com/ugurhuseynaliyev",
    },
  },
  {
    name: "Nasraddin Guseinov",
    role: "Front-end Developer",
    description: "Focused on building interactive and user-friendly web interfaces.",
    image: nasraddinImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/nasradin-guseinovi-8b5ba5362/",
      github: "https://github.com/Nasradin24",
    },
  },
  {
    name: "Adil Abtalibov",
    role: "Frontend Developer",
    description: "Passionate about modern frontend technologies and clean UI design.",
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
    role: "Design Team Lead",
    description: "Leading the design team with a strong focus on UX and product vision.",
    image: canerImg,
    socials: {
      instagram: "https://www.instagram.com/ui.caner",
      behance: "https://www.behance.net/canersanli",
      linkedin: "https://www.linkedin.com/in/canersanli",
    },
  },
  {
    name: "Firuze Mansurzade",
    role: "UI/UX Designer",
    description: "Passionate about creating intuitive and beautiful user experiences.",
    image: firuzeImg,
    socials: {
      instagram: "https://www.instagram.com/designer.fira",
      behance: "https://www.behance.net/firuzemansurz",
      linkedin: "https://www.linkedin.com/in/firuze-mansurzade-856908263/",
    },
  },
  {
    name: "Said Abtalibov",
    role: "Graphic Designer",
    description: "Creative designer focused on branding and visual storytelling.",
    image: saidImg,
    socials: {
      instagram: "https://www.instagram.com/_abtal1b0v_",
      behance: "https://www.behance.net/seidabtalibov",
      linkedin: "https://www.linkedin.com/in/s%C9%99id-abtal%C4%B1bov-1330b6353",
    },
  },
  {
    name: "Emin Seyidov",
    role: "Motion Designer",
    description: "Specialized in motion graphics and dynamic visual experiences.",
    image: eminImg,
    socials: {
      instagram: "https://www.instagram.com/emin_seyidovart",
      behance: "https://www.behance.net/eminseyidov20",
      linkedin: "https://www.linkedin.com/in/emin-seyidov-560472323",
    },
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="scroll-mt-20 w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dm-sans text-[48px] md:text-[80px] font-bold text-[#170F49] leading-none">
            {t('team.title')}
          </h2>
          <p className="font-dm-sans text-[20px] md:text-[35px] font-medium text-[#4E4B66] mt-4">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}