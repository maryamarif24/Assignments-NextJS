import React from "react";



export default function Achievement() {
    return (
        <div className="w-[428px] h-[451px] pb-[48px] md:w-[1280px] md:h-[488px] md:py-[112px] md:px-[64px] md:mb-[25px]">
            <div className="md:w-[1152px] md:h-[264px] md:gap-[24px]">
                <div className="mb-[32px] flex-col items-center justify-items-center px-[24px] pt-[48px] md:px-[0px] md:pt-[0px] md:w-[1152px] md:h-[136px] md:gap-[24px]">
                    <h1 className="w-[380px] h-[42px] font-bold text-[32px] leading-[41.6px] text-center mb-[24px] md:w-[1152px] md:h-[58px] md:text-[48px] md:leading-[57.6px]">Our Achivements</h1>
                    <p className="text-[18px] leading-[28px] text-center w-[362px] h-[81px] md:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                    <p className="min-sm:hidden max-md:hidden w-[1152px] h-[54px] text-[18px] leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>

                <div className="px-[24px] w-[380px] h-[176px] md:w-[1256px] md:h-[96px] md:flex md:px-[12px] ">
                    <div className="py-[8px] gap-[16px] w-[380px] h-[76px] flex mb-[24px] text-center md:w-[616px] md:h-[96px] md:py-[8px] md:gap-[24px] md:flex md:items-center md:justify-center md:mr-[24px]">
                        <div className="w-[182px] h-[60px] gap-[8px] md:w-[296px] md:h-[80px] md:gap-[8px] md:mr-[24px] md:flex-col md:items-center md:justify-center">
                            <h1 className="font-bold text-[20px] leading-[28px] md:w-[91px] md:h-[48px] md:text-[40px] md:leading-[48px]">+200</h1>
                            <p className="text-[16px] leading-[24px] md:w-[59px] md:h-[24px] md:px-[20px] md:pt-[8px]">Courses</p>
                        </div>
                        <div className="w-[182px] h-[60px] gap-[8px]  md:w-[296px] md:h-[80px] md:gap-[8px] md:ml-[24px] md:flex-col md:items-center md:justify-center">
                            <h1 className="font-bold text-[20px] leading-[28px] md:w-[72px] md:h-[48px] md:text-[40px] md:leading-[48px]">50K</h1>
                            <p className="text-[16px] leading-[24px] md:w-[60px] md:h-[24px]  md:px-[5px] md:pt-[8px]">Mentors</p>
                        </div>
                    </div>

                    <div className="py-[8px] gap-[16px] w-[380px] h-[76px] flex text-center md:w-[616px] md:h-[96px] md:py-[8px] md:gap-[24px] md:flex md:items-center md:justify-center">
                        <div className="w-[182px] h-[60px] gap-[8px]  md:w-[296px] md:h-[80px] md:gap-[8px] md:flex-col md:items-center md:justify-center">
                            <h1 className="font-bold text-[20px] leading-[28px] md:w-[91px] md:h-[48px] md:text-[40px] md:leading-[48px]">370k</h1>
                            <p className="text-[16px] leading-[24px] md:w-[64px] md:h-[24px] md:px-[5px] md:pt-[8px]">Students</p>
                        </div>
                        <div className="w-[182px] h-[60px] gap-[8px]  md:w-[296px] md:h-[80px] md:gap-[8px] md:flex-col md:items-center md:justify-center">
                            <h1 className="font-bold text-[20px] leading-[28px] md:w-[91px] md:h-[48px] md:text-[40px] md:leading-[48px]">100+</h1>
                            <p className="text-[16px] leading-[24px] md:w-[85px] md:h-[24px] md:px-[5px] md:pt-[8px]">Recognition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}