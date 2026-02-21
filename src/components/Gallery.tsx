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
            <img
              src={src}
              alt={`Slide ${i}`}
              className="
    w-full
    aspect-4/3
    object-contain
    rounded-2xl
    bg-gray-100
  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
