import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Slide = { id: number; url: string };
type Props = { slides: Slide[] };

export default function Carousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = (i: number) => {
    if (!slides.length) return;
    const next = (i + slides.length) % slides.length;
    setIndex(next);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <div className="w-full flex items-center gap-4 my-5">
      <button
        onClick={prev}
        className="bg-[#4A3AFF] text-white
    rounded-full
    aspect-square
    w-3 sm:w-4 md:w-6 lg:w-10
    flex items-center justify-center
    shrink-0"
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-[10px] sm:text-xs md:text-sm lg:text-lg leading-none"
        />
      </button>

      <div className="w-full overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex gap-10">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="shrink-0 w-[68%] sm:w-[38%] lg:w-[28%] hover:shadow-2xl duration-300"
            >
              <div className="rounded-xl bg-white shadow overflow-hidden">
                <img
                  src={slide.url}
                  alt=""
                  className="h-auto w-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="bg-[#4A3AFF] text-white
    rounded-full
    aspect-square
    w-3 sm:w-4 md:w-6 lg:w-10
    flex items-center justify-center
    shrink-0"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-[10px] sm:text-xs md:text-sm lg:text-lg leading-none"
        />
      </button>
    </div>
  );
}
