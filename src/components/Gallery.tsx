import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Slide ${i}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
}
