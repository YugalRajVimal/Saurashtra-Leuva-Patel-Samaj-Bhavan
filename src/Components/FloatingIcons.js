import React, { useContext } from "react";
import { MyContext } from "../store/MyContext";
import { FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const FloatingIcons = () => {
  const { phoneNo } = useContext(MyContext);

  return (
    <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 z-50">
      <a
        href={`tel:${phoneNo}`}
        className="flex justify-center items-center gap-2"
      >
        <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />

        <div className="relative w-fit h-fit px-4 py-1 rounded-xl bg-white shadow-xl">
          Call Us
          <div className="h-full aspect-[1/1] scale-[0.4] bg-white absolute left-[2px] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        </div>
      </a>
      <div className="flex flex-col justify-center items-end gap-2">
        <Link
          to={"/contact-us"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex justify-center items-center gap-2"
        >
          <div className="relative w-fit h-fit px-4 py-1 rounded-xl bg-white shadow-xl">
            Enquiry
            <div className="h-full aspect-[1/1] scale-[0.4] bg-white absolute right-[2px] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
          </div>
          <FaQuestionCircle className="text-5xl text-gray-700" />
        </Link>
        <a
          href={`https://wa.me/${phoneNo}`}
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.open(`https://wa.me/${phoneNo}`, "_blank"); // WhatsApp
          //   window.location.href = "/whatsapp"; //Whatapp
          // }}
          className="flex justify-center items-center gap-2"
        >
          <div className="relative w-fit h-fit px-4 py-1 rounded-xl bg-white shadow-xl">
            Contact Us
            <div className="h-full aspect-[1/1] scale-[0.4] bg-white absolute right-[2px] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
          </div>
          <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
        </a>
      </div>
    </div>
  );
};

export default FloatingIcons;
