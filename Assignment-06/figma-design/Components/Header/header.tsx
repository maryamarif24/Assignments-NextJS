import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";



export default function Header () {
    return (
        <div className="w-[1280px] h-[54px]">
            
            <div className="max-md:hidden w-[1280px] h-[54px] border-b border-[#676767] flex items-center justify-center">
                <div className="w-[1154px] h-[54px] gap-[16px] max-md:hidden font-roboto text-black text-[14px] items-center justify-between leading-[21px] md:flex">
                    <div className="flex gap-[16px] items-center">
                        <p className="w-[205px]">Phone Number: 956 742 455 678</p>
                        <hr className="w-[1px] h-[25px] bg-[#676767] border-none"/>
                        <p>Email:info@ddsgnr.com</p>
                    </div>
                    <div className="flex w-[132px] h-[24px] gap-[12px]">
                        <Image
                            src="/Images/Facebook.svg"
                            width={24}
                            height={24}
                            alt="Facebook"
                        />
                        <Image
                            src="/Images/Instagram.svg"
                            width={24}
                            height={24}
                            alt="Instagram"
                        />
                        <Image
                            src="/Images/Twitter.svg"
                            width={24}
                            height={24}
                            alt="Twitter"
                        />
                        <Image
                            src="/Images/LinkedIn.svg"
                            width={24}
                            height={24}
                            alt="LinkedIn"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-[32px] justify-between md:justify-between min-md:w-[1280px] md:mt-[16px] min-md:h-[72px] md:px-[64px] md:bg-[#F7F7F7] w-[428px] h-[72px] border-b border-black px-[24px] md:w-[1280px] md:h-[54px] md:flex min-md:items-center">
                
                <div className="md:flex md:items-center">
                    <div className="my-[29px] gap-[10.5px] md:pr-[114.5px]">
                        <Image
                            src="/Images/Ddsgnr Library.svg"
                            width={130.6}
                            height={30.38}
                            alt="Ddsgnr Logo"
                        />
                    </div>

                    <div className="max-md:hidden w-[910px] h-[44px] gap-[32px] bg-white flex items-center ">
                        <div className="w-[687px] h-[44px] gap-[32px] flex gap-[32px]">
                            <div className="w-[64px] h-[44px] border-b border-black p-[10px]">
                                <p className="w-[44px] h-[24px] text-[16px] leading-[24px]">Home</p>
                            </div>
                            <div className="w-[79px] h-[44px] p-[10px]">
                                <p className="w-[59px] h-[24px] text-[16px] leading-[24px]">Courses</p>
                            </div>
                            <div className="w-[81px] h-[44px] p-[10px]">
                                <p className="w-[61px] h-[24px] text-[16px] leading-[24px]">Services</p>
                            </div>
                            <div className="w-[113px] h-[44px] p-[10px]">
                                <p className="w-[93px] h-[24px] text-[16px] leading-[24px]">Achievement</p>
                            </div>
                            <div className="w-[86px] h-[44px] p-[10px]">
                                <p className="w-[66px] h-[24px] text-[16px] leading-[24px]">About Us</p>
                            </div>
                            <div className="w-[104px] h-[44px] p-[10px]">
                                <p className="w-[84px] h-[24px] text-[16px] leading-[24px]">Testimonial</p>
                            </div>
                        </div>

                        <div className="w-[191px] h-[40px] gap-[16px] items-center justify-center">
                            <Button variant="secondary" className="w-[80px] h-[40px] px-[20px] py-[8px] text-[16px] mr-[16px]">
                                <p className="w-[40px] h-[24px]">Login</p>
                            </Button>
                            <Button variant="outline" className="w-[95px] h-[40px] px-[24px] py-[12px] text-[16px]">
                                <p>Sign Up</p>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <Image
                        src="/Images/Icon.svg"
                        width={48}
                        height={48}
                        alt="Icon"
                    />
                </div>
            </div>
        </div>
    )
}