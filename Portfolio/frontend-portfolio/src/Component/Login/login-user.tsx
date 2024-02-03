import React from "react";
import Laptop from "/src/assets/Images/laptop.jpg";

const LoginUser = () => {
  return (
    <div className="bg-white w-full py-6 px-4 h-full mt-10">
      {/* if media is greater than medium, it change to grid column 2 */}
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className=" font-bold text-2xl text-[#00df9a] mt-4 uppercase pb-5">
            Sign in to this website...
          </p>
          <h1 className="font-bold md:text-2xl sm:text-xl text-lg py-2">
            Email
          </h1>
          <input
            className="text-body w-[50%] rounded-md border-b-[0.5px] bg-transparent p-3 text-black placeholder-gray-400 outline-none transition  ltr:pr-12 rtl:pl-12 dark:text-white"
            placeholder="abc@gmail.com"
          ></input>
          <h1 className="font-bold md:text-2xl sm:text-xl text-lg py-2">
            Password
          </h1>
          <input
            className="text-body w-[50%] rounded-md border-b-[0.5px] bg-transparent p-3 text-black placeholder-gray-400 outline-none transition  ltr:pr-12 rtl:pl-12 dark:text-white"
            placeholder="********"
          ></input>
          <button className="text-[#00df9a] bg-black rounded-md w-[50%] mx-auto md:mx-0 py-3 my-6 font-medium">
            Sign In
          </button>
          <p className="w-[50%] flex justify-center text-[#00df9a]">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
