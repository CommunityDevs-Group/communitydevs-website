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
        shadow-[0px_20px_50px_rgba(79,70,229,0.08)]
        p-10
        text-center
        transition-all
        duration-300
        hover:-translate-y-3
        hover:shadow-[0px_30px_60px_rgba(79,70,229,0.12)]
      "
    >
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-6"
      />

      {/* Name */}
      <h3 className="text-xl font-semibold text-[#1C1B4B]">{name}</h3>

      {/* Role */}
      <p className="font-dm-sans text-[15px] font-medium text-[#6360F6] mt-2">
        {role}
      </p>

      {/* Description */}
      <p className="font-dm-sans text-[16px] text-[#6F6C90] mt-4 leading-[28px]">
        {description}
      </p>

      {/* Social Icons */}
      {socials && (
        <div className="flex justify-center gap-5 mt-8 text-[#B7B5C8]">
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6360F6] transition"
            >
              <FaInstagram size={18} />
            </a>
          )}

          {socials.behance && (
            <a
              href={socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6360F6] transition"
            >
              <FaBehance size={18} />
            </a>
          )}

          {socials.portfolio && (
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6360F6] transition"
            >
              <FaGlobe size={18} />
            </a>
          )}

          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6360F6] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          )}

          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6360F6] transition"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
