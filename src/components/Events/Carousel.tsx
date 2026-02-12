import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

type Slide = { id: number; url: string };
type Props = { slides: Slide[] };

export default function Carousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToItem = (nextIndex: number) => {
    setIndex(nextIndex);
    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const next = () => {
    const nextIndex = (index + 1) % slides.length;
    scrollToItem(nextIndex);
  };

  const prev = () => {
    const prevIndex = (index - 1 + slides.length) % slides.length;
    scrollToItem(prevIndex);
  };

  return (
    <div className="w-full flex items-center gap-4 my-2">
      <button
        onClick={prev}
        className="bg-[#4A3AFF] text-white rounded-full aspect-square w-8 md:w-10 flex items-center justify-center shrink-0 hover:bg-[#392ccc] transition-all active:scale-90 shadow-md"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-sm lg:text-lg" />
      </button>

      <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-4 md:gap-5 p-4">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              
              className="shrink-0 w-[65%] sm:w-[35%] lg:w-[22%] group"
            >
              <div className="rounded-xl bg-white overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                <img
                  src={slide.url}
                  alt="Event Slide"
                  className="h-40 md:h-48 w-full object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="bg-[#4A3AFF] text-white rounded-full aspect-square w-8 md:w-10 flex items-center justify-center shrink-0 hover:bg-[#392ccc] transition-all active:scale-90 shadow-md"
      >
        <FontAwesomeIcon icon={faAngleRight} className="text-sm lg:text-lg" />
      </button>
    </div>
  );
}