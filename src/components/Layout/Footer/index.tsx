import logoImg from "../../../assets/images/Logo.png";
import Icon1 from "../../../assets/images/Group 85.svg";
import Icon2 from "../../../assets/images/Group 86.svg";
import Icon3 from "../../../assets/images/Group 87.svg";
import Icon4 from "../../../assets/images/Group 88.svg";
import Vector1 from "../../../assets/images/Vector.png";
import Vector2 from "../../../assets/images/Vector (1).png";
import Vector3 from "../../../assets/images/Vector (2).png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b font-Inter from-[#6868f4] to-[#4a3aff] text-white 
  grid grid-cols-1 md:grid-cols-5 gap-8 p-8 mt-[54px] pb-[70px] 
  px-6 md:px-[84px]">
  
  {/* 1. Sütun: Mobildə tam en, masaüstündə 2 hissə */}
  <div className="col-span-1 md:col-span-2">
    <div className="mb-[40px] md:mb-[69px] ml-[9px] flex flex-row gap-8 items-center">
      <img src={logoImg} alt="Logo" />
      <div className="flex gap-4">
        <img src={Icon1} alt="facebook" />
        <img src={Icon2} alt="twitter" />
        <img src={Icon3} alt="linkedin" />
        <img src={Icon4} alt="instagram" />
      </div>
    </div>
    <div className="text-sm leading-6 font-Inter text-[16px] md:text-[18px]">
      <p className="mb-4 whitespace-normal md:whitespace-nowrap">
        © 2025 Biccas Inc. Copyright and rights reserved
      </p>
      <p className="flex items-center gap-2">
        Terms and Condtions <span>•</span> Privacy Policy
      </p>
    </div>
  </div>

  {/* 2. Sütun: Pages */}
  <div className="mt-4">
    <div className="font-bold mb-6 text-[20px]">Pages</div>
    <ul className="flex flex-col gap-4">
      <li>Home</li>
      <li>About Us</li>
      <li>Events</li>
      <li>Our Team</li>
    </ul>
  </div>

  {/* 3. Sütun: Contact */}
  <div className="mt-4">
    <div className="font-bold mb-6 text-[20px]">Contact</div>
    <ul className="flex flex-col gap-4 text-[15px]">
      <li className="flex gap-2 items-center">
        <img src={Vector1} alt="icon1" /> (406) 555-0120
      </li>
      <li className="flex gap-2 items-center">
        <img src={Vector2} alt="icon2" /> mangcoding123@gmail.com
      </li>
      <li className="flex gap-2 items-start">
        <img src={Vector3} alt="icon3" className="mt-1" /> 
        <span className="max-w-[200px]">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
        </li>
      
    </ul>
  </div>

  {/* 4. Sütun: Contact Us */}
  <div className="mt-4">
    <div className="font-medium mb-3 text-[20px]">Contact Us</div>
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="First Name" className="p-2 rounded text-black w-full" />
        <input type="email" placeholder="Email" className="p-2 rounded text-black w-full" />
        <input type="text" placeholder="Message" className="p-2 rounded text-black w-full" />
      </form>
      <button className="bg-white text-black py-2 px-6 w-full md:w-[108px] rounded font-bold">
        Send
      </button>
    </div>
  </div>
</footer>
  );
};

export default Footer;
