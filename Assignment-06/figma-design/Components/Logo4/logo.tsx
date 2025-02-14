import React from "react";
import Image from "next/image";



export default function Logo() {
    return (
        <div className="w-[428px] h-[239.34px] gap-[24px] md:w-[1280px] md:h-[228px] md:px-[0px] md:py-[80px] md:bg-[#F7F7F7] md:mt-[70px]">
            <div className="md:flex">
                <div className="w-[327px] h-[54px] font-bold text-[18px] leading-[27px] pt-[48px] ml-[24px] mr-[77px] pb-[48px] md:flex md:items-center">
                    <p className="md:hidden w-[320px] h-[86px] font-bold text-[24px] leading-[33.6px]">Trusted by the world&apos;s best companies [social proof to build credibility]</p>
                    <p className="max-md:hidden w-[320px] h-[86px] ">Trusted by 2000+ companies worldwide.</p>
                </div>

                <div className="w-[1376px] h-[65.34px] md:w-[880px] md:h-[56px] md:py-[8.74px] md:gap-[19.12px] flex ml-[24px] py-[16px] pt-[40px] my-[24px] mt-[48px] md:mt-[0px] md:pt-[0px]">
                    <div className="pr-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo1.svg"
                            alt="Logo1"
                            width={107.15}
                            height={33.34}
                        />
                    </div>
                    <div className="px-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo2.svg"
                            alt="Logo2"
                            width={107.15}
                            height={33.34}
                        />
                    </div>
                    <div className="px-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo3.svg"
                            alt="Logo3"
                            width={107.15}
                            height={33.34}
                        />
                    </div>
                    <div className="px-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo4.svg"
                            alt="Logo4"
                            width={107.15}
                            height={33.34}
                        />
                    </div>
                    <div className="px-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo5.svg"
                            alt="Logo5"
                            width={107.15}
                            height={33.34}
                        />
                    </div>
                    <div className="px-[8px] py-[16px] ">
                        <Image
                            src="/Images/Logo6.svg"
                            alt="Logo6"
                            width={107.15}
                            height={33.34}
                        />
                    </div>    
                </div>
            </div>
        </div>
    )
}