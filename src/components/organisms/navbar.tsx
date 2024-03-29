import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto items-center flex flex-row">
          <Image
            src={"/assets/Decagone.png"}
            width={55}
            height={55}
            alt="MyLogo"
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 ">
          Decagone
          </span>
        </a>

        <div className="w-[300px] h-full md:flex md:flex-row items-center hidden justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#worthtobuy" className="cursor-pointer">
            Worth to buy
            </a>
            <a href="#projects" className="cursor-pointer">
             Chart
            </a>
          </div>
        </div>

        <div className="flex flex-row  gap-5">
          {Socials.map((social) => (
            <a href={social.url}>
            <Image
              src={social.src}
              width={24}
              height={24}
              alt={social.name}
              key={social.name}
              />
              </a>
          ))}
        </div>
      </div>
    </div>
  );
}
