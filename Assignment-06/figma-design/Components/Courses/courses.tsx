import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";


export default function Courses() {
    return (
        <div className="w-[428px] h-[2135px] flex-col py-[48px] px-[24px] md:w-[1280px] md:h-[1742px] md:py-[112px] md:px-[0px] md:flex-col md:justify-center md:items-center">
            
            <div className="md:w-[1280px] md:h-[118px] md:px-[24px]">
                <div className="md:w-[1152px] md:h-[118px] md:flex md:items-center md:justify-center md:px-[104px] ">
                    <div className="w-[249px] h-[93px] md:w-[768px] md:h-[118px] gap-[16px] mb-[48px] text-center items-center justify-center pt-[48px] md:pt-[0px] flex-col px-[70px] md:px-[24px] md:py-[0px] py-[48px] md:flex-col md:items-center md:justify-center md:text-center">
                        <h1 className="font-bold text-[32px] pb-[24px] px-[65px] md:px-[0px] w-[119px] h-[42px] mb-[24px] md:w-[768px] md:h-[67px] md:text-[56px] md:leading-[67.2px]">Courses</h1>
                        <p className="text-[18px] leading-[27px] w-[249px] h-[27px] md:w-[768px] md:px-[5px]">Your Ultimate Guide to learning</p>
                    </div>
                </div>
            </div>

            <div className="pt-[48px] w-[318px] h-[1898px] mb-[64px] flex-col py-[48px] md:w-[1280px] md:h-[1340px] md:gap-[64px]">
                <div className="md:w-[1152px] md:h-[40px] md:flex md:items-center md:justify-center">
                    <div className="w-[336px] h-[40px] flex px-[22px] md:px-[48px]">
                        <div className="w-[87px] h-[40px] border-b-[1px] border-[#676767] py-[8px] px-[16px] gap-[8px]">
                            <p className="text-[16px] leading-[24px] w-[55px] h-[24px]">Popular</p>
                        </div>

                        <div className="py-[8px] px-[16px] w-[140px] h-[40px]">
                            <p className="w-[108px] h-[24px] text-[16px] leading-[24px]">Recommended</p>
                        </div>

                        <div className="py-[8px] px-[16px] w-[109px] h-[40px]">
                            <p className="w-[77px] h-[24px] text-[16px] leading-[24px]">Best Price</p>
                        </div>
                    </div>
                </div>

                <div className="w-[380px] h-[1690px] my-[64px] md:w-[1280px] md:h-[1132px] md:px-[0px]">
                    
                    <div className="md:flex md:mb-[64px] md:justify-between">
                        <div className="w-[380px] h-[558px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                <div className="rounded-[5px] md:rounded-none md:hidden">
                                    <Image
                                        src="/Images/B1.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                    />
                                </div>
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B12.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                        className="h-[300px]"
                                    />
                                </div>

                                <div className="gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px] ">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Design</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[191px] h-[34px] mb-[8px] md:w-[382px] md:h-[34px]">UX/UI Design 201</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[380px] h-[534px] mb-[32px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                <div className="rounded-[5px]  md:rounded-none md:hidden">
                                    <Image
                                        src="/Images/B2.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                    />
                                </div>
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B22.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                    />
                                </div>

                                <div className="w-[382px] h-[22px] gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px]">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Programmimg</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[382px] h-[34px] py-[8px]">Introduction to Python</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] mt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[380px] h-[558px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                <div className="rounded-[5px] md:rounded-none md:hidden">
                                    <Image
                                        src="/Images/B3.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                    />
                                </div>
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B33.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                        className="h-[300px]"
                                    />
                                </div>

                                <div className="gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px] ">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Business</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[300px] h-[34px] mb-[8px] md:w-[382px] md:h-[34px]">Data Analysis for Beginners</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:mb-[64px] md:justify-between min-sm:hidden max-md:hidden">
                        <div className="w-[380px] h-[558px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B44.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                        className="h-[300px]"
                                    />
                                </div>

                                <div className="gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px] ">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Art</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[191px] h-[34px] mb-[8px] md:w-[382px] md:h-[34px]">Art Specialization</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[380px] h-[534px] mb-[32px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B55.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                    />
                                </div>

                                <div className="w-[382px] h-[22px] gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px]">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Law</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[382px] h-[34px] py-[8px]">Rule of Law</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] mt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[380px] h-[558px] gap-[24px] md:w-[416px] md:h-[534px]">
                            <div className="bg-[#F7F7F7] w-[380px] h-[558px] rounded-[5px] md:w-[416px] md:h-[534px] md:rounded-none">
                                
                                <div className="min-sm:hidden max-md:hidden">
                                    <Image
                                        src="/Images/B66.svg"
                                        width={416}
                                        height={300}
                                        alt="Image"
                                        className="h-[300px]"
                                    />
                                </div>

                                <div className="gap-[8px] flex-col px-[16px] md:w-[416px] md:h-[210px] md:px-[0px]">
                                    <div className="md:w-[416px] md:h-[122px] md:flex md:items-center md:justify-center md:mb-[24px] ">
                                        <div className="py-[24px] w-[348px] h-[146px] mb-[24px] md:w-[382px] md:h-[122px] md:px-[0px] md:gap-[8px] md:pr-[16px]">
                                            <div className="flex">
                                                <div className="w-[326px] h-[21px] font-semibold text-[14px] leading-[21px]">
                                                    <p>Tech</p>
                                                </div>
                                                <div className="gap-[4px]">
                                                    <Image
                                                        src="/Images/Star.svg"
                                                        width={48}
                                                        height={24}
                                                        alt="Image"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="font-bold text-[24px] leading-[33.6px] pt-[8px] w-[191px] h-[34px] mb-[8px] md:w-[382px] md:h-[34px]">Introduction to webflow</h1>
                                                <p className="text-[16px] leading-[24px] pt-[8px] w-[326px] h-[72px] mr-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gap-[16px] w-[382px] h-[40px] pt-[24px] md:mx-[16px] md:pb-[24px]">
                                        <Button variant="blanks" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[77px] h-[24px]">Enroll Now</p>
                                        </Button>
                                        <Button variant="destructive" className="w-[117px] h-[40px] px-[20px] py-[8px] text-[16px] gap-[8px]">
                                            <p className="w-[37px] h-[24px] font-semibold">$400</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="md:w-[1280px] md:h-[40px] md:flex md:items-center md:justify-center">
                        <div className="items-center flex justify-center px-[114px] w-[380px] h-[40px] pt-[64px] pb-[48px]">
                            <Button variant="secondary" className="w-[152px] h-[40px] px-[24px] py-[12px] text-[16px]">View All Courses</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}