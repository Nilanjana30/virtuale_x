import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Camera from "../assets/camera.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HomePage() {
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

  const handleCameraClick = () => {
    setAngleIndex((prevIndex) => (prevIndex + 1) % active.angles.length);
  };

  return (
    <div className="flex items-start justify-center h-screen ">
      <div
        className="flex justify-center items-end h-full w-3/4 bg-cover bg-no-repeat bg-center bg-[#717d88]  "
        style={{
          backgroundImage: `url(${active.angles[angleIndex]})`,
          transition: "background-image 0.5s ease",
        }}
      >
        <LazyLoadImage
          src={Camera}
          alt="Camera Icon"
          className="w-20 h-20 pb-5 cursor-pointer"
          onClick={handleCameraClick}
        />
      </div>

      <div
        className="flex flex-col justify-start items-center h-full w-1/4 bg-[#717d88]"
        sm-w-12
      >
        <div className="h-20 w-full bg-[#040835]  flex justify-center items-center ">
          <img src={Logo} alt="logo" className="w-52" />
        </div>
        {data.map((item, i) => {
          return (
            <div
              key={item.id}
              className={`flex justify-center items-center w-48 h-48 mb-5 bg-[#040835] cursor-pointer ${
                activeItem === item.id
                  ? "border-solid border-4 border-white"
                  : ""
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
              <img src={item.assetImg} alt="asset" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
