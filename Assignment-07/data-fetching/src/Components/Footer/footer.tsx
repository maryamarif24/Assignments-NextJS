import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex max-md:block max-md:text-center max-md:items-center max-md:justify-center max-md:w-[768px] justify-between border-t bg-[#0A1128] text-[#D3D3D3] border-white w-[1255px] px-[40px]  ">
        <div className="w-[280px] h-[200px] pt-[85px] ">
            <h1 className="text-center flex justify-center font-rye text-4xl hover:text-red-600 max-md:text-center ">Maryam Arif</h1>
        </div>
        <div className="w-[280px] h-[200px] pt-[35px] ">
            <h1 className="text-center font-sans text-2xl font-bold pt-[10px]">Contact Me</h1>
            <h2 className="font-sans px-[10px] pt-[10px] "><span className="font-semibold">Email: </span>maryamarif118nb@gmail.com</h2>
            <h2 className="font-sans px-[10px] pt-[10px] "><span className="font-semibold">Phone: </span>+12 3456 789</h2>
        </div>
        <div className="w-[280px] h-[200px] pt-[35px] ml-[50px] ">
            <h1 className="text-center font-sans text-2xl font-bold pt-[10px]">Follow Me</h1>
            <div className="flex w-[150px] justify-between ml-[70px] mt-[20px]  ">
                <a className="bg-[#F7B801] hover:bg-[#f2cd5e]" href="https://www.linkedin.com/in/maryam-arif-71b0992b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1YQzqxhPQTuhAnVO2Axq7g%3D%3D">
                    <Image
                        src="/Images/LinkedIn.svg"
                        alt="LinkedIn"
                        height={30}
                        width={30}
                    />
                </a>
                <a className="bg-[#F7B801] hover:bg-[#f2cd5e]" href="https://www.instagram.com/maryam.arif._/?next=%2F&hl=en#">
                    <Image
                        src="/Images/Instagram.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                    />
                </a>
                <a className="bg-[#F7B801] hover:bg-[#f2cd5e]" href="https://github.com/maryamarif24">
                    <Image
                        src="/Images/GitHub.svg"
                        alt="Github"
                        width={30}
                        height={30}
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer