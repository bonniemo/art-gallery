"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BtnLocation = () => {
  return (
    <Link 
    href="/location"
    className="flex items-center h-16">
      <div className="bg-colorDark h-full w-full flex justify-center items-center">
        <p className="uppercase text-colorLight">Our location</p>
      </div>
      <div className="bg-colorAccent h-full flex items-center px-2">
        <IoIosArrowForward className="text-2xl text-colorLight" />
      </div>
    </Link>
  );
};

export default BtnLocation;
