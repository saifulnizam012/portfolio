import React from "react";

const CustomsProject = ({ imageSrc, title, price, features }: any) => {
  const isPartnership = title === "Partnership";

  return (
    <div
      className={`w-full shadow-xl flex flex-col ${
        isPartnership ? `my-8 p-4 bg-gray-100 ` : `p-7 my-11 `
      } rounded-lg  hover:scale-105 duration-300`}
    >
      <img
        className={`w-20 mx-auto mt-[-3rem] bg-white ${
          isPartnership ? `bg-transparent` : ``
        }`}
        src={imageSrc}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className=" font-bold text-center text-4xl">{price}</p>
      <div className="text-center font-medium">
        {features.map((features: any) => (
          <p className="py-2 border-b mx-4">{features}</p>
        ))}
      </div>
      <button
        className={`${
          isPartnership ? `bg-black text-[#00df9a]` : `bg-[#00df9a]`
        } w-[200px] mt-4 py-4 rounded-md mx-auto font-bold`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default CustomsProject;
