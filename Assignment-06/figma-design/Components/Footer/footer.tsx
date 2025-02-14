import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";



export default function Footer() {
    return (
        <div className="w-[428px] h-[1411px] py-[48px] px-[24px] gap-[48px] md:w-[1280px] md:h-[684px] md:p-[80px]">
            <div className="w-[380px] h-[1315px] gap-[48px] md:w-[1120px] md:h-[524px]">
                <div className="w-[380px] h-[261px] gap-[24px] md:w-[1120px] md:h-[82px] md:flex md:items-center md:justify-between">
                    <div className="w-[287px] h-[91px] gap-[16px] text-center px-[46.5px] md:w-[500px] md:h-[51px] md:text-left">
                        <h1 className="w-[287px] h-[27px] font-semibold text-[18px] leading-[27px] mb-[16px] md:w-[500px] md:h-[27px] md:m-[0px]">Subscribe to our newsletter</h1>
                        <p className="w-[287px] h-[48px] text-[16px] leading-[24px] md:w-[500px] md:h-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>


                    <div className="w-[380px] h-[112px] py-[24px] md:w-[400px] md:h-[82px] md:py-0 flex flex-col md:flex-col md:justify-between md:items-center">
                        <div className="md:flex md:justify-between">
                            <form className="w-full md:w-[265px] h-[48px] border border-black rounded-[5px] flex items-center px-[12px] md:px-[12px] md:mr-[16px]">
                                <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-[24px] text-[16px] text-slate-800 leading-[24px] outline-none"
                                />
                            </form>

                            
                            <div className="w-full mt-[16px] md:w-[119px] md:h-[48px] md:mt-0">
                                <Button
                                variant="secondary"
                                className="w-full h-[48px] text-[16px] border border-black rounded-[5px] flex items-center justify-center"
                                >
                                Subscribe
                                </Button>
                            </div>
                        </div>

                        
                        <p className="w-full mt-[8px] text-[12px] leading-[18px] text-center md:mt-0 md:w-[400px] md:h-[18px] md:text-left">
                            By subscribing you agree to our{" "}
                            <span className="border-b border-black">Privacy Policy</span>
                        </p>
                    </div>

                </div>

                <div className="w-[172px] h-[811px] gap-[32px] py-[48px] px-[104px] flex-col items-center justify-center md:flex md:justify-between md:items-center md:w-[1120px] md:h-[225px] md:my-[80px]">
                    <div className="md:flex md:justify-between md:w-[1120px] md:h-[225px]">
                        <div className="w-[172px] h-[40px] flex items-center md:w-[250px]">
                            <Image
                                src="/Images/Ddsgnr Library.svg"
                                width={130.6}
                                height={40}
                                alt="Ddsgnr Logo"
                            />
                        </div>

                        <div className="md:flex md:w-[830px] md:justify-between md:gap-[16px]">
                            <div className="w-[172px] h-[225px] py-[32px] text-center md:text-left md:py-[0px] md:w-[250px] ">
                                <h1 className="w-[172px] h-[24px] font-semibold text-[16px] leading-[24px] pb-[16px]">Courses</h1>
                                
                                <div className="w-[172px] h-[185px] pt-[16px]">
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Business</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Development</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Technology</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Design</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Programming</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[172px] h-[225px] py-[32px] text-center mt-[32px] md:mt-[0px] md:text-left md:py-[0px] md:w-[250px]">
                                <h1 className="w-[172px] h-[24px] font-semibold text-[16px] leading-[24px] pb-[16px]">Resources</h1>
                                
                                <div className="w-[172px] h-[185px] pt-[16px]">
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Career</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Resume</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Learning</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Interview Preparation</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Jobs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[172px] h-[225px] py-[32px] text-center mt-[32px] md:mt-[0px] md:text-left md:py-[0px] md:w-[250px]">
                                <h1 className="w-[172px] h-[24px] font-semibold text-[16px] leading-[24px] pb-[16px]">About Us</h1>
                                
                                <div className="w-[172px] h-[185px] pt-[16px]">
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Contact</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Help/Support</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">FAQ</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Terms And Conditions</p>
                                    </div>
                                    <div className="w-[172px] h-[37px] py-[8px] text-center md:text-left">
                                        <p className="w-[172px] h-[21px] text-[14px] leading-[21px]">Partners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[380px] h-[147px] gap-[32px] py-[48px] my-[48px] items-center justify-center flex-col md:w-[1120px] md:h-[57px] md:text-left">
                    <div className="w-[380px] h-[33px] border-t-2 border-black md:w-[1120px]"></div>
                    <div className="w-[318px] h-[114px] gap-[24px] px-[17.5px] flex-col items-center md:flex md:w-[1120px] md:h-[24px] md:px-[0px]">
                        <div className="md:flex md:w-[1120px] md:h-[24px] md:p-[0px]">
                            <div className="w-[345px] h-[66px] gap-[24px] text-center flex-col md:flex md:text-left">
                                <div className="md:flex md:w-[1120px] md:h-[24px]">
                                    <div className="w-[195px] h-[21px] text-center mx-[75px] md:text-left md:flex">
                                        <p className="w-[195px] h-[21px] text-[14px] leading-[21px] text-center">2023 Ddsgnr. All right reserved.</p>
                                    </div>

                                    <div className="w-[345px] h-[21px] gap-[24px] flex justify-between pt-[24px] md:pt-[0px] md:w-[345px] md:h-[21px]">
                                        <p className="w-[87px] h-[21px] text-[14px] leading-[21px] border-b border-black">Privacy Policy</p>
                                        <p className="w-[105px] h-[21px] text-[14px] leading-[21px] border-b border-black">Terms of Service</p>
                                        <p className="w-[105px] h-[21px] text-[14px] leading-[21px] border-b border-black">Cookies Settings</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-[132px] h-[24px] gap-[12px] flex items-center justify-center mx-[104px] mt-[24px] md:mt-[0px] md:pl-[38px] md:justify-right md:flex md:ml-[656px]">
                                <Image
                                    src="/Images/Facebook.svg"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src="/Images/Instagram.svg"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src="/Images/Twitter.svg"
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                />
                                <Image
                                    src="/Images/LinkedIn.svg"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}