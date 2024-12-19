"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BtnLocation = () => {
  return (
    <Link 
    href="/location"
    className="flex items-center w-max h-16">
      <div className="bg-colorDark h-full w-52 flex justify-center items-center">
        <p className="uppercase text-colorLight p">Our location</p>
      </div>
      <div className="bg-colorAccent h-full flex items-center px-2">
        <IoIosArrowForward className="text-2xl text-colorLight" />
      </div>
    </Link>
  );
};

export default BtnLocation;
