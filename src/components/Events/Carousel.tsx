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
        className="bg-[#4A3AFF] text-white rounded-full sm:w-3 sm:h-3 md:h-6 md:h-6 lg:w-10 lg:h-10 shrink-0 flex justify-center items-center"
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="sm:text-sm md:text-md lg:text-lg"
        />
      </button>

      <div className="w-full overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex gap-5">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="shrink-0 w-[70%] sm:w-[40%] lg:w-[30%]"
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
        className="bg-[#4A3AFF] text-white rounded-full sm:w-3 sm:h-3 md:h-6 md:h-6 lg:w-10 lg:h-10 shrink-0 flex justify-center items-center"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="sm:text-sm md:text-md lg:text-lg"
        />
      </button>
    </div>
  );
}
