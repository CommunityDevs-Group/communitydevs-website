import imgUp from "../../assets/images/Path _44_up.png";
import imgDown from "../../assets/images/Path_44_down.png";
import Carousel from "./Carousel";
import ev1 from "../../assets/images/Graphic_events_post .png";
import ev2 from "../../assets/images/UX_UI_Design.png";
import ev3 from "../../assets/images/Graphic_Design.png";

const Events = () => {
  const slides = [
    { id: 1, url: ev1 },
    { id: 2, url: ev2 },
    { id: 3, url: ev3 },
    { id: 4, url: ev1 },
    { id: 5, url: ev2 },
    { id: 6, url: ev3 },
  ];

  return (
    <div className="w-[80%] mx-auto my-5">
      <h1 className="text-center text-4xl lg:text-5xl font-bold text-[#170F49]">
        Events
      </h1>

      <div className="flex flex-col gap-5 my-5 md:my-10 lg:my-15">
        <img
          src={imgUp}
          className="w-[3rem] md:w-[4rem] lg:w-[5rem]
    object-contain
    max-w-full"
          alt="Image"
        />
        <Carousel slides={slides} />
        <img
          src={imgDown}
          className="flex self-end w-[3rem] md:w-[4rem] lg:w-[5rem]"
        />
      </div>
    </div>
  );
};

export default Events;
