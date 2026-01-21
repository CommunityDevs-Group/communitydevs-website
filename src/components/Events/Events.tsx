import imgUp from "../../assets/images/Path _44_up.png";
import imgDown from "../../assets/images/Path_44_down.png";
import Carousel from "./Carousel";

const Events = () => {
  return (
    <div className="w-[80%] mx-auto my-5">
      <h1 className="text-center text-5xl font-bold text-[#170F49]">Events</h1>

      <div className="flex flex-col gap-5 my-20">
        <img src={imgUp} width={80} alt="Image" />
        <Carousel/>
        <img src={imgDown} width={80} alt="Image" className="flex self-end"/>
      </div>
    </div>
  );
};

export default Events;
