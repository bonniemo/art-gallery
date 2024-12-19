import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

type FooterProp = {
  page: string;
};

const Footer = ({ page }: FooterProp) => {
  return (
    <section
      className={`px-6 py-8 ls:px-10 ls:py-14 ls:flex ls:justify-between ${
        page === "landingPage"
          ? "bg-colorDark text-colorLight"
          : "bg-colorAccent text-colorDark"
      }`}
    >
      <h3 className="uppercase mb-8 ls:m-0">
        <span className="block">Modern</span> Art Gallery
      </h3>
      <p className=" l:w-1/3 m:w-2/4">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <section className="mt-8 flex gap-4 text-xl ls:m-0">
        <IoLogoFacebook />
        <FaInstagram />
        <FaTwitter />
      </section>
    </section>
  );
};

export default Footer;
