import { FaInstagram, FaBehance, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

type SocialLinks = {
  instagram?: string;
  behance?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
};

type Props = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: SocialLinks;
};

export default function TeamCard({
  name,
  role,
  description,
  image,
  socials,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        text-center
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
        group
        h-full
        flex
        flex-col
        justify-between
        border
        border-gray-50
      "
    >
      <div>
    
        <div className="relative w-24 h-24 mx-auto mb-5">
           <div className="absolute inset-0 bg-indigo-100 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
           <img
            src={image}
            alt={name}
            className="relative w-full h-full rounded-full object-cover shadow-inner"
          />
        </div>

        
        <h3 className="text-lg font-bold text-[#1C1B4B] group-hover:text-[#6360F6] transition-colors">
          {name}
        </h3>

        <p className="font-dm-sans text-[13px] font-bold text-[#6360F6] uppercase tracking-wider mt-1">
          {role}
        </p>

        <p className="font-dm-sans text-[14px] text-[#6F6C90] mt-4 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {socials && (
        <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-50 text-[#B7B5C8]">
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-all hover:scale-125"
            >
              <FaInstagram size={16} />
            </a>
          )}

          {socials.behance && (
            <a
              href={socials.behance}
              target="_blank"
              rel="noopener {/* Social Icons */}noreferrer"
              className="hover:text-[#053eff] transition-all hover:scale-125"
            >
              <FaBehance size={16} />
            </a>
          )}

          {socials.portfolio && (
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A3AFF] transition-all hover:scale-125"
            >
              <FaGlobe size={16} />
            </a>
          )}

          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition-all hover:scale-125"
            >
              <FaLinkedinIn size={16} />
            </a>
          )}

          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#333] transition-all hover:scale-125"
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}