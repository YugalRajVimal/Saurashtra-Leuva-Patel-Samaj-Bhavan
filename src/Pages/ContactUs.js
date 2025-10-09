import React from "react";
import Banner from "../Components/PageBanner";
import BookingEnquiry from "../Components/ContactPageComp/BookingEnquiry";

const ContactUs = () => {
  return (
    <div id="about" className="w-full  bg-cover bg-center">
      <Banner heading={"Contact Us"} />
      <BookingEnquiry />
    </div>
  );
};

export default ContactUs;
