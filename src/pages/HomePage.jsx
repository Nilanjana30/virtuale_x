import React from "react";
import Logo from "../assets/logo.png";
import Camera from "../assets/camera.svg";
import { useState, useEffect } from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex justify-center items-end h-full w-3/4 bg-cover bg-no-repeat bg-center bg-[#717d88] animate-pulse">
      <div className="w-20 h-20 pb-5 bg-gray-300 rounded-full cursor-not-allowed"></div>
    </div>
  );
};

const HomePage = () => {
  const data = [
    {
      id: 1,
      assetImg: require("../assets/obj/obj1.png"),
      angles: [
        require("../assets/Sofa/ScreenShot000001.png"),
        require("../assets/SofaAngle_1/HighresScreenshot00022.png"),
        require("../assets/SofaAngle_2/HighresScreenshot00023.png"),
      ],
    },
    {
      id: 2,
      assetImg: require("../assets/obj/obj2.png"),
      angles: [
        require("../assets/Sofa/ScreenShot00012.png"),
        require("../assets/SofaAngle_1/HighresScreenshot00026.png"),
        require("../assets/SofaAngle_2/HighresScreenshot00027.png"),
      ],
    },

    {
      id: 3,
      assetImg: require("../assets/obj/obj3.png"),
      angles: [
        require("../assets/Sofa/ScreenShot00014.png"),
        require("../assets/SofaAngle_1/HighresScreenshot00025.png"),
        require("../assets/SofaAngle_2/HighresScreenshot00024.png"),
      ],
    },
  ];

  const [active, setActive] = useState(data[0]);
  const [activeItem, setActiveItem] = useState(null);
  const [angleIndex, setAngleIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleCameraClick = () => {
    setAngleIndex((prevIndex) => (prevIndex + 1) % active.angles.length);
  };

  useEffect(() => {
    setIsLoading(true);
    const image = new Image();
    image.src = active.angles[angleIndex];
    image.onload = () => {
      setIsLoading(false);
    };
  }, [active, angleIndex]);

  return (
    <div className="flex items-start justify-center h-screen">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className="flex justify-center items-end h-full w-3/4 bg-cover bg-no-repeat bg-center bg-[#717d88]  "
          style={{
            backgroundImage: `url(${active.angles[angleIndex]})`,
            transition: "background-image 0.8s ease",
            minHeight: "300px",
          }}
          loading="lazy"
        >
          <img
            src={Camera}
            alt="Camera Icon"
            className="w-20 h-20 pb-5 cursor-pointer"
            onClick={handleCameraClick}
          />
        </div>
      )}

      <div className="flex flex-col justify-start items-center h-full w-1/4 bg-[#717d88]">
        <div className="h-20 w-full bg-[#040835]  flex justify-center items-center ">
          <img src={Logo} alt="logo" className="w-52" />
        </div>
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`flex justify-center items-center w-48 h-48 mb-5 bg-[#040835] cursor-pointer ${
              activeItem === item.id ? "border-solid border-4 border-white" : ""
            }`}
            style={{
              marginTop: i === 0 ? "20px" : "0",
            }}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => {
              setActive(item);
            }}
          >
            <img src={item.assetImg} alt="asset" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
