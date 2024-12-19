"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const BtnGoHome = () => {
  return (
    <Link href="/" className="flex items-center w-max h-16">
      <div className="bg-colorAccent h-full flex items-center px-2">
        <IoIosArrowBack className="text-2xl text-colorLight" />
      </div>
      <div className="bg-colorDark h-full w-52 flex justify-center items-center">
        <p className="uppercase text-colorLight">Back to home</p>
      </div>
    </Link>
  );
};

export default BtnGoHome;
