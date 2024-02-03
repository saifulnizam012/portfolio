import React from "react";

const ContactHome = () => {
  return (
    <div className="w-full text-white py-16 px-4 bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="py-2 font-bold text-2xl sm:text-3xl md:text-4xl ">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className=" w-full p-3 rounded-md flex "
            />
            <button className="text-black bg-[#00df9a]  rounded-md w-[200px] mx-auto sm:mx-2 py-3 my-6 font-medium">
              Notify Me
            </button>
          </div>
          <p>
            we care bout the protection of your data.Read our{" "}
            <a href="" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>

    //my code
    // <div className="bg-black mx-4 h-screen text-white">
    //     <div className="text-white mt-10">
    //         <h1 className="font-bold text-2xl">Want tips & tricks to optimize your flow?</h1>
    //         <p className="font-medium text-sm pt-2">Sign up to our newsletter and stay up to date</p>
    //     </div>
    //     <div className="mx-auto  py-6 grid md:grid-cols-2 text-center justify-center w-[700px] max-w-[1240px]">
    //         <input type="text" placeholder="Enter your email" className=" mb-4 mx-3 p-4 rounded-md w-[700px] h-[50px] md:w-[500px] "/>
    //         <button className="font-medium m-auto sm:mt-0 py-3 w-[200px] bg-[#00df9a] text-black rounded-md">Notify me</button>
    //     </div>
    //     <p>we care bout the protextion of your data.Read our <a href="" className="text-[#00df9a] underline">Privacy Policy</a></p>
    // </div>
  );
};

export default ContactHome;
