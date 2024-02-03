import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Button from "/src/assets/Images/btn-down.png";
import Video from "/src/assets/Videos/homeherobanner.mp4";

const HeroHome: React.FC = () => {
  const scrollToComponent = (componentId: string) => {
    const element = document.getElementById(componentId);
    if (element) {
      const offset = 50;
      const topOffset =
        element.getBoundingClientRect().top + window.scrollY - offset;
      // element.scrollIntoView({  behavior: 'smooth' })
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const [text] = useTypewriter({
    words: ["Junior Software Developer", "Fresh Graduate"],
    loop: 0,
  });

  return (
    <div className="text-black w-screen sm:h-[80vh] h-[65vh] lg:h-screen relative overflow-hidden pt-10 flex flex-grow items-center justify-center">
      <video
        className="flex justify-center items-center bg-fill  min-w-[2500px]"
        // style={{ filter: "brightness(0.7)" }}
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="text-center flex flex-col justify-center absolute inset-0 top-[20%]  lg:top-[10%]">
        <div className="border-0 rounded-lg bg-slate-800 bg-opacity-70 p-5 mx-[25%]">
          <p className="text-[#00df9a] font-bold p-2 sm:text-2xl lg:text-3xl text-sm">
            Hi!
          </p>
          <div>
            <p className="lg:text-5xl sm:text-4xl text-md font-bold lg:py-2">
              This is my
            </p>
          </div>
          <h1 className="lg:text-7xl sm:text-6xl text-2xl font-bold lg:pb-2">
            Portfolio
          </h1>
          <p className="lg:text-2xl sm:text-xl text-xs text-[#B6C4B6] font-bold sm:py-3">
            I am <br />
            <p className="lg:text-4xl sm:text-2xl text-sm text-[#00df9a]">
              {text}
            </p>
          </p>
        </div>
        <div
          className="absolute md:top-[85%] inset-0 md:block hidden cursor-pointer"
          onClick={() => scrollToComponent("about")}
        >
          <div className="flex justify-center ">
            <img src={Button} alt="" className="h-[30px]" />
          </div>
          <p className="text-white text-sm lg:pt-2">Scroll Down</p>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
