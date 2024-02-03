import React from "react";
import CustomsProject from "./experience-custom";
import Single from "/src/assets/Images/single.png";
import Double from "/src/assets/Images/double.png";
import Triple from "/src/assets/Images/triple.png";

const MainProject = () => {
  //use array to get the list of card
  const card = [
    {
      imageSrc: Single,

      title: "Single User",
      price: "RM149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      imageSrc: Double,

      title: "Partnership",
      price: " RM199",
      features: ["1 TB Storage", "3 User Granted", "Send up to 10 GB"],
    },
    {
      imageSrc: Triple,

      title: "Group Account",
      price: " RM299",
      features: ["5 TB Storage", "10 User Granted", "Send up to 20 GB"],
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {card.map((card, index) => (
          //... is used to pass all the properties of the card
          <CustomsProject key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MainProject;
