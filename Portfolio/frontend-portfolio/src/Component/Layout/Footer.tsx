import React from "react";

import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Fotext from "./FooterText";

const Footer = () => {
  const text = [
    { T1: "Solution", T2: ["Analytics", "Marketing", "Commerce", "Insight"] },
    { T1: "Support", T2: ["Pricing", "Documentation", "Guides", "API Status"] },
    { T1: "Company", T2: ["About", "Blog", "Jobs", "Press", "Careers"] },
    { T1: "Legal", T2: ["Claim", "Policy", "Terms"] },
  ];

  return (
    <div className="bg-black">
      <div className="mx-20 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="font-bold w-full text-[#00df9a] text-3xl">React.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae
            excepturi impedit odio illo atque.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
            <FaGithubSquare size={25} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
          {text.map((text, index) => (
            <Fotext key={index} {...text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
