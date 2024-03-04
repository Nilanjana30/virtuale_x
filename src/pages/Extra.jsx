import React, { useState } from "react";
import Logo from "../assets/logo.png";

function HomePage() {
  const data = [
    {
      id: 1,
      img: require("../assets/main/img1.png"),
      assetImg: require("../assets/obj/obj1.png"),
    },
    {
      id: 2,
      img: require("../assets/main/img2.png"),
      assetImg: require("../assets/obj/obj2.png"),
    },
    {
      id: 3,
      img: require("../assets/main/img3.png"),
      assetImg: require("../assets/obj/obj3.png"),
    },
  ];

  const [active, setActive] = useState(data[0].img);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="flex items-start justify-center h-screen">
      <div
        className="flex justify-center items-center h-full w-3/4 bg-cover bg-no-repeat bg-center bg-[#717d88]"
        style={{
          backgroundImage: `url(${active})`,
        }}
      ></div>
      <div className="flex flex-col justify-start items-center h-full w-1/4 bg-[#717d88]">
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
                setActive(item.img);
              }}
            >
              <img
                src={item.assetImg}
                alt="asset"
                loading="lazy"
                about="assetImage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
