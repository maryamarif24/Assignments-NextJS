import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";




export default function Explore() {
    return (
        <div className="pt-[48px] w-[428px] h-[862px] md:w-[1280px] md:h-[1049px] md:py-[112px] md:gap-[80px] md:flex-col md:justify-center md:items-center md:text-center">
            <div className="pl-[24px] pr-[19px] pb-[48px] md:w-[786px] md:h-[109px] md:gap-[357px] md:mx-[96px] md:px-[256px]">
                <h1 className="font-bold text-[32px] leading-[42.6px] flex text-center justify-center w-[385px] h-[84px] md:w-[768px] md:h-[58px] md:text-[48px] md:leading-[57.6px] md:text-left">
                    <div className="md:w-[786px] md:h-[58px]">Explore Courses By Category</div>
                </h1>
                <p className="text-[18px] leading-[27px] text-center pt-[24px] md:w-[768px] md:h-[27px] md:text-left">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>

            <div className="pl-[24px] pr-[24px] md:w-[1280px] md:h-[636px] md:py-[80px] md:pl-[0px] md:pr-[0px] md:mx-[0px]">
                
                <div className="md:flex md:w-[1280px] md:h-[132px] md:justify-between md:mb-[64px]">
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/L1.svg"
                                width={100}
                                height={100}
                                alt="Image"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Design & Development</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/L2.svg"
                                width={100}
                                height={100}
                                alt="Image2"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Marketing</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/L3.svg"
                                width={100}
                                height={100}
                                alt="Image3"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Development</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                </div>

                <div className="min-sm:hidden max-md:hidden md:flex md:w-[1280px] md:h-[132px] md:justify-between md:mb-[64px]">
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Communication.svg"
                                width={100}
                                height={100}
                                alt="Image"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Communication</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Digital.svg"
                                width={100}
                                height={100}
                                alt="Image2"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Digital Marketing</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Development.svg"
                                width={100}
                                height={100}
                                alt="Image3"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Self Development</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                </div>

                <div className="min-sm:hidden max-md:hidden md:flex md:w-[1280px] md:h-[132px] md:justify-between md:mb-[64px]">
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Business.svg"
                                width={100}
                                height={100}
                                alt="Image"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Business</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Finance.svg"
                                width={100}
                                height={100}
                                alt="Image2"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Finance</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] flex rounded-[5px] gap-[32px] p-[16px] md:p-[16px] md:w-[410.67px] md:h-[132px] h-[132px] w-[380px] items-center mb-[24px]">
                        <div>
                            <Image
                                src="/Images/Consulting.svg"
                                width={100}
                                height={100}
                                alt="Image3"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-[20px] leading-[30px]">Consulting</p>
                            <p className="text-[18px] leading-[27px]">50+ Courses Available</p>
                        </div>
                    </div>
                </div>

                <div className="items-center flex justify-center mt-[64px]">
                    <Button variant="secondary" className="w-[155px] h-[48px] px-[24px] py-[12px] text-[16px] gap-[8px] leading-[24px]">View All Courses</Button>
                </div>
            </div>
        </div>
    )
}