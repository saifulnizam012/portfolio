import Profile from "/src/assets/Images/profile_picture.jpeg";

const AboutHome = () => {
  return (
    <div className="bg-white" id="about">
      {/* if media is greater than medium, it change to grid column 2 */}
      <div className="mx-auto grid lg:grid-cols-2 gap-5 sm:px-20 sm:py-10 p-5">
        <div className="border-2 border-black rounded-lg overflow-hidden flex items-center justify-center lg:m-10 m-5">
          <img
            className="transition-transform transform-gpu scale-100 hover:scale-110 bg-cover"
            src={Profile}
            alt="/"
          />
        </div>
        <div className="flex flex-col justify-center lg:text-start text-center lg:items-start items-center gap-y-3 px-5">
          <p className=" font-bold text-[#00df9a] uppercase lg:text-2xl sm:text-xl text-lg">
            About Me
          </p>
          <h1 className="font-bold lg:text-4xl sm:text-3xl text-2xl ">
            Mohamad Saiful Nizam Bin Abd Aziz
          </h1>
          <p className="font-medium lg:text-xl sm:text-lg text-sm">
            Enthusiastic and motivated computer science graduate with a strong
            foundation in software development, seeking a challenging position
            as a Junior Software Developer to apply my technical skills,
            problem-solving abilities, and passion for coding.
          </p>
          <button className="text-[#00df9a] bg-black rounded-md max-w-[200px] px-[10%] lg:mx-0 py-3 font-medium mt-3 hover:text-[#ffff] hover:scale-110">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
