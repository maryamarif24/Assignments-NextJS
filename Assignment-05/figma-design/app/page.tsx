import Image from "next/image";
import Header from "@/Components/Header/header"
import React from "react";

export default function Home() {
  return (
    <div className="w-[1920px] h-[960.56px]">

      <Header></Header>

      <div className="flex">
      
        <div className="">

          <h1 className="w-[496px] h-[189px] mt-[200px] ml-[100px] font-bodoni font-bold text-[40px] leading-[65.8px] tracking-[2.5%]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="w-[750px] h-[147px] mt-[28px] ml-[100px] font-bodoni font-medium leading-[49.35px] tracking-[2.5%] text-[30px] text-[#787054]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className="w-[288px] h-[58px] mt-[50px] ml-[100px] p-[10px] gap-[10px] rounded-[10px] bg-[#A29875] font-bodoni leading-[37.5px]font-medium text-[30px] text-white">Explore Now</button>
        </div>

        <div className="mt-[98px]">
          {/* <img src="/Images/manzarri.png" alt="image" width={490} height={667} className="rounded-br-[190px] rounded-tl-[190px]"/> */}
          <Image
            src="/Images/manzarri.png"
            alt="image"
            width={490}
            height={667}
            className="rounded-br-[190px] rounded-tl-[190px]"
          />
        </div>
      
      </div>

    </div>
  );
}
