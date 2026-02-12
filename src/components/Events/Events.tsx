import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import imgUp from "../../assets/images/Path _44_up.png";
import imgDown from "../../assets/images/Path_44_down.png";
import Carousel from "./Carousel";
import ev1 from "../../assets/images/Graphic_events_post .png";
import ev2 from "../../assets/images/UX_UI_Design.png";
import ev3 from "../../assets/images/Graphic_Design.png";

const Events = () => {
  const { t, i18n } = useTranslation();

  const slides = [
    { id: 1, url: ev1 }, { id: 2, url: ev2 }, { id: 3, url: ev3 },
    { id: 4, url: ev1 }, { id: 5, url: ev2 }, { id: 6, url: ev3 },
  ];

  return (
    <motion.section 
      key={i18n.language}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="events" 
      className="w-[95%] md:w-[85%] mx-auto my-8 scroll-mt-24"
    >
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#170F49] mb-2">
        {t("nav.events")}
      </h2>

      <div className="flex flex-col gap-1 my-2">
        <img
          src={imgUp}
          className="w-[2rem] md:w-[3rem] object-contain opacity-30"
          alt="Decoration"
        />
        
        <Carousel slides={slides} />
        
        <img
          src={imgDown}
          className="flex self-end w-[2rem] md:w-[3rem] object-contain opacity-30"
          alt="Decoration"
        />
      </div>
    </motion.section>
  );
};

export default Events;