import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function Team() {
    return (
        <div className="w-[428px] h-[1075px] py-[48px] mt-[96px] bg-[#F7F7F7] md:w-[1280px] md:h-[895px] md:py-[112px] md:px-[0px] md:pb-[0px]">
            <div className="md:w-[1280px] md:h-[109px] md:flex md:items-center md:justify-center md:text-center">
                <div className="w-[363px] h-[120px] text-center flex-col items-center justify-center px-[32.5px] gap-[24px] md:px-[0px] md:w-[768px] md:h-[109px]">
                    <h1 className="w-[363px] h-[42px] font-bold text-[32px] leading-[41.6px] pb-[24px] md:text-[48px] md:leading-[57.6px] md:pb-[48px] md:w-[768px] md:h-[58px]">Our team</h1>
                    <p className="w-[363px] h-[54px] text-[18px] leading-[27px] pt-[24px] md:w-[768px] md:h-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>

            <div className="md:w-[1280px] md:h-[428px]">
                <div className="w-[380px] h-[723px] gap-[96px] py-[48px] px-[24px] md:flex md:w-[1280px] md:h-[209px] md:gap-[48px] md:px-[0px] md:mb-[48px]">
                    <div className="flex-col items-center justify-center md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S1.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">James Nduku</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">Marketing Coordinator</p>
                        </div>

                        <div className="w-[394.67px] h-[24px] pt-[58px] flex items-center justify-center">
                            <div className="w-[100px] h-[24px] gap-[14px] flex items-center justify-center">
                                <div>
                                    <Image
                                        src="/Images/LinkedIn.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Twitter.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Dribble.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col items-center justify-center pt-[58px] md:pt-[0px] md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S2.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">Joseph Munyambu</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">Nursing Assistant</p>
                        </div>

                        <div className="w-[394.67px] h-[24px] pt-[58px] flex items-center justify-center">
                            <div className="w-[100px] h-[24px] gap-[14px] flex items-center justify-center">
                                <div>
                                    <Image
                                        src="/Images/LinkedIn.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Twitter.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Dribble.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col items-center justify-center pt-[58px] md:pt-[0px] md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S3.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">Joseph Ngumbau</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">Medical Assistant</p>
                        </div>

                        <div className="w-[394.67px] h-[24px] pt-[58px] flex items-center justify-center">
                            <div className="w-[100px] h-[24px] gap-[14px] flex items-center justify-center">
                                <div>
                                    <Image
                                        src="/Images/LinkedIn.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Twitter.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/Images/Dribble.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[380px] h-[723px] gap-[96px] py-[48px] px-[24px] md:flex md:w-[1280px] md:h-[209px] md:gap-[48px] md:px-[0px] min-sm:hidden max-md:hidden">
                    <div className="flex-col items-center justify-center md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S4.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">Erick Kipkemboi</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">Web Designer</p>
                        </div>

                        
                    </div>

                    <div className="flex-col items-center justify-center pt-[58px] md:pt-[0px] md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S5.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">Stephen Kerubo</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">President of Sales</p>
                        </div>

                        
                    </div>

                    <div className="flex-col items-center justify-center pt-[58px] md:pt-[0px] md:h-[209px] md:w-[394.67px]">
                        <div className="flex items-center justify-center w-[394.67px] h-[80px]">
                            <Image
                                src="/Images/S6.svg"
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        <div className="py-[24px] w-[394.67px] h-[57px] gap-[16px] text-center flex-col items-center justify-center">
                            <h1 className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px]">John Leboo</h1>
                            <p className="w-[394.67px] h-[27px] text-[18px] leading-[27px]">Dog Trainer</p>
                        </div>

                        
                    </div>
                </div>

            </div>

            

            <div className="flex items-center justify-center w-[394.67px] py-[88px] px-[40px] mx-[24px] md:hidden">
                <Button variant="blanks" className="w-[89px] h-[40px] px-[16px] py-[8px] text-[16px] gap-[8px]">
                    <p className="w-[77px] h-[24px]">View All</p>
                </Button>
            </div>
        </div>
    )
}