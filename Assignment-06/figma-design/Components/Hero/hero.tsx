import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="md:w-[1280px] md:h-[800px] md:flex">
            <div className="md:w-[640px] md:h-[800px] md:flex md:items-center">
                <div className="w-[428px] h-[390px] block md:w-[640px] md:h-[300px] md:pr-[60px] md:pl-[80px] md:gap-[24px]">
                    <div className="font-Roboto-serif w-[380px] h-[174px] gap-[24px] flex-col mx-[24px] pt-[64px] pb-[24px] md:w-[500px] md:h-[212px] md:gap-[24px]">
                        <h1 className="font-bold text-[40px] leading-[48px] w-[380px] h-[96px] md:w-[500px] md:h-[134px] md:text-[56px] md:leading-[67.2px]">Learn new skills online with ease</h1>
                        <p className="text-[18px] w-[380px] h-[54px] leading-[27px] mt-[24px] md:w-[500px] md:h-[54px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                    </div>

                    <div className="flex justify-center pt-[16px] gap-[16px] mt-[74px] mr-[46px] ml-[24px] w-[358px] h-[64px] md:pt-[24px]">
                        <Button variant="outline" className="w-[178px] h-[48px] px-[24px] py-[12px] text-[16px]">Start Learning Now</Button>
                        <Button variant="secondary" className="w-[178px] h-[48px] px-[24px] py-[12px] text-[16px]">Explore Courses</Button>
                    </div>
                </div>
            </div>

            <div className="min-sm:hidden max-md:hidden md:mt-[70px]">
                <Image
                    src="/Images/Girl2.svg"
                    width={640}
                    height={800}
                    alt="Girl"
                />
            </div>
        </div>
    )
}