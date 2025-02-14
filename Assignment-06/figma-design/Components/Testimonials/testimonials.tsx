import React from "react";
import Image from "next/image";


export default function Test() {
    return (
        <div className="w-[428px] h-[681.89px] py-[48px] px-[24px] gap-[48px] md:w-[1280px] md:h-[830.89px] md:bg-[#F7F7F7]">
            <div className="md:w-[1280px] md:h-[109px] md:px-[64px]">
                <div className="w-[361px] h-[120px] gap-[24px] text-center md:w-[560px] md:h-[109px] md:text-left">
                    <h1 className="md:hidden w-[315px] h-[42px] font-bold text-[32px] leading-[41.6px] mx-[23px] mb-[24px]">What Our Student Say</h1>
                    <h1 className="min-sm:hidden max-md:hidden font-bold text-[48px] leading-[57.6px]">Customer testimonials</h1>
                    <p className="w-[361px] h-[54px] text-[18px] leading-[27px] md:w-[560px] md:h-[27px] md:mt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="md:w-[1280px] md:h-[417.89px] md:px-[64px] md:flex md:pt-[128px]">
                <div className="w-[380px] h-[417.89px] md:w-[1152px]">
                    
                    <div className="md:w-[1152px] md:h-[321.89px] md:flex md:justify-between">
                        <div className="w-[380px] h-[321.89px] border border-black px-[32px] py-[32px] md:w-[362.67px]">
                            <div className="gap-[4px] ">
                                <Image
                                    src="/Images/Stars.svg"
                                    width={116}
                                    height={18.89}
                                    alt="Stars"
                                />
                            </div>

                            <div className="w-[316px] h-[215px] gap-[24px]">
                                <div className="w-[316px] h-[135px] my-[24px]">
                                    <p className="text-[18px] leading-[27px]"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</q></p>
                                </div>

                                <div className="flex items-center gap-[20px]">
                                    <div>
                                        <Image
                                            src="/Images/A1.svg"
                                            width={56}
                                            height={56}
                                            alt="Image"
                                        />
                                    </div>

                                    <div className="w-[178px] h-[48px]">
                                        <h1 className="w-[96px] h-[24px] font-semibold text-[16px] leading-[24px] md:hidden">Wade Warren</h1>
                                        <p className="w-[178px] h-[24px] text-[16px] leading-[24px] md:hidden">Position, Company name</p>
                                        <h1 className="w-[99px] h-[24px] font-semibold text-[16px] leading-[24px] min-sm:hidden max-md:hidden">James Nduku</h1>
                                        <p className="w-[178px] h-[24px] text-[16px] leading-[24px] min-sm:hidden max-md:hidden">Software Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="min-sm:hidden max-md:hidden w-[380px] h-[321.89px] border border-black px-[32px] py-[32px] md:w-[362.67px]">
                            <div className="gap-[4px] ">
                                <Image
                                    src="/Images/Stars.svg"
                                    width={116}
                                    height={18.89}
                                    alt="Stars"
                                />
                            </div>

                            <div className="w-[316px] h-[215px] gap-[24px]">
                                <div className="w-[316px] h-[135px] my-[24px]">
                                    <p className="text-[18px] leading-[27px]"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</q></p>
                                </div>

                                <div className="flex items-center gap-[20px]">
                                    <div>
                                        <Image
                                            src="/Images/A2.svg"
                                            width={56}
                                            height={56}
                                            alt="Image"
                                        />
                                    </div>

                                    <div className="w-[178px] h-[48px]">
                                        <h1 className="w-[117px] h-[24px] font-semibold text-[16px] leading-[24px]">Erick Kipkemboi</h1>
                                        <p className="w-[101px] h-[24px] text-[16px] leading-[24px]">Scrum Master</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="min-sm:hidden max-md:hidden w-[380px] h-[321.89px] border border-black px-[32px] py-[32px] md:w-[362.67px]">
                            <div className="gap-[4px] ">
                                <Image
                                    src="/Images/Stars.svg"
                                    width={116}
                                    height={18.89}
                                    alt="Stars"
                                />
                            </div>

                            <div className="w-[316px] h-[215px] gap-[24px]">
                                <div className="w-[316px] h-[135px] my-[24px]">
                                    <p className="text-[18px] leading-[27px]"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</q></p>
                                </div>

                                <div className="flex items-center gap-[20px]">
                                    <div>
                                        <Image
                                            src="/Images/A3.svg"
                                            width={56}
                                            height={56}
                                            alt="Image"
                                        />
                                    </div>

                                    <div className="w-[178px] h-[48px]">
                                        <h1 className="w-[115px] h-[24px] font-semibold text-[16px] leading-[24px]">Stephen Kerubo</h1>
                                        <p className="w-[109px] h-[24px] text-[16px] leading-[24px]">UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[380px] h-[48px] flex justify-between items-center mt-[48px] md:w-[1152px]">
                        <div className="gap-[8px]">
                            <Image
                                src="/Images/Slider Dots.svg"
                                width={72}
                                height={8}
                                alt="Slider Dots"
                            />
                        </div>

                        <div className="gap-[15px]">
                            <Image
                                src="/Images/Slider Buttons.svg"
                                width={111}
                                height={48}
                                alt="Slider Buttons"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}