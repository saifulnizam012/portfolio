import { useState } from "react";
import { animated } from "react-spring";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const sliderImageUrl = [
  {
    name: "The Portable Digital Tasbih Counting System",
    desc: "FYP project",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "Gym management System",
    desc: "Website",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "Gym Equipment Book System",
    desc: "Autosport website",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "Riddle Chat Board",
    desc: "Autosport website",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "FPA",
    desc: "Autosport website",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "FPGSC",
    desc: "Autosport website",
    image: "/src/assets/Images/fpa1.png",
  },
  {
    name: "FPT",
    desc: "Autosport website",
    image: "/src/assets/Images/fpa1.png",
  },
];

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const overlayAnimations = sliderImageUrl.map((_, index) => ({
    height: hoveredIndex === index ? "39%" : "17%",
    background: hoveredIndex === index ? "#207AE3" : "black",
  }));
  // const overlayTextAnimations = sliderImageUrl.map((_, index) => ({
  //   height: hoveredIndex ? "50%" : "20%",
  // }));
  // const overlayTextAnimation1 = useSpring({
  //   height: hoveredImage1 ? "50%" : "20%",
  // });
  // const gridAnimation1 = useSpring({
  //   height: hoveredImage1 ? "0%" : "27%",
  //   opacity: hoveredImage1 ? 1 : 0,
  // });
  // const gridAnimation21 = useSpring({
  //   opacity: hoveredImage1 ? 1 : 0,
  //   config: { duration: 800 },
  // });
  // const overlayContentAnimation1 = useSpring({
  //   transform: hoveredImage1 ? "translateX(0%)" : "translateX(-100%)",
  //   opacity: hoveredImage1 ? 1 : 0,
  // });
  // const overlayContent2Animation1 = useSpring({
  //   transform: hoveredImage1 ? "translateX(0%)" : "translateX(100%)",
  //   opacity: hoveredImage1 ? 1 : 0,
  // });
  return (
    <div className="bg-[#163020] py-10 h-full">
      <h1 className="text-[#B6C4B6] uppercase font-bold lg:text-4xl sm:text-3xl text-2x flex justify-center pb-10">
        My Projects
      </h1>
      <div className="px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1780: {
              slidesPerView: 3,
            },
          }}
        >
          {sliderImageUrl.map((sliderImage, index) => (
            <SwiperSlide
              key={index}
              className="overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={sliderImage.image}
                alt=""
                className="rounded-lg object-cover relative"
              />
              <animated.p
                className="absolute inset-x-0 bottom-0 font-bold text-lg text-white flex justify-center"
                style={overlayAnimations[index]}
              >
                {sliderImage.name}
              </animated.p>
              <p className="">{sliderImage.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
