"use client"
import { useState } from 'react'
import React from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import Link from 'next/link';

  

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-black text-white h-[70px] w-[1255px] items-center justify-between flex px-[20px] max-md:w-[768px] ">
        <h1 className="pt-[5px] font-rye text-3xl hover:text-red-600 ">Maryam Arif</h1>

        <div className="md:hidden">
          {!isOpen ? (
            <FiMenu
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FiX
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        <div className="font-sans font-semibold w-[300px] flex justify-between max-md:hidden ">
            <a href="/" className="transition hover:font-bold ease-in-out delay-50 hover:-translate-y-0 hover:text-red-600 hover:scale-110 duration-300 ...">Home</a>
            <a href="/ClientSide" className="transition hover:font-bold ease-in-out delay-50 hover:-translate-y-0 hover:text-red-600 hover:scale-110 duration-300 ...">Client Side</a>
            <a href="/ServerSide" className="transition hover:font-bold ease-in-out delay-50 hover:-translate-y-0 hover:text-red-600 hover:scale-110 duration-300 ...">Server Side</a>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden absolute top-16 left-0 w-full bg-white border-2 border-slate-200`}
        >
          <li>
            <Link
              href={"/"}
              className="block text-3xl font-semibold text-center py-3 font-sans text-black border border-slate-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/ClientSide"}
              className="block text-3xl font-semibold font-sans text-black text-center border py-3 border-slate-200 hover:bg-black hover:text-[#f6bf38]"
            >
              Client Side
            </Link>
          </li>
          <li>
            <Link
              href={"/ServerSide"}
              className="block text-3xl font-semibold font-sans text-center py-3 border border-slate-200 text-black"
            >
              Server Side
            </Link>
          </li>
        </ul>

    </div>
  )
}

export default Header