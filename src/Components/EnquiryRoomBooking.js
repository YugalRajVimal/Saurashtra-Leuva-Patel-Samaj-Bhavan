import React from "react";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";
// const { phoneNo } = useContext(MyContext);

const EnquiryRoomBooking = () => (
  <div className="max-w-screen-xl mx-auto px-3 py-12 flex flex-col items-center">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-7">
      Enquiry For Room Booking
    </h1>
    <p className="text-gray-700 text-center max-w-4xl mb-4">
      Looking to book a room at Saurashtra Leuva Patel Samaj Bhavan in Dwarka? Our comfortable and affordable rooms are perfect for pilgrims and travelers alike. Whether you're visiting for a spiritual journey or a family vacation, we offer a peaceful and serene environment for all guests. To ensure a seamless booking experience, simply reach out to us for inquiries. Our friendly staff will assist you with room availability, pricing, and any other details you need to make your stay memorable.
    </p>
    <p className="text-gray-700 text-center max-w-4xl mb-8">
      With convenient booking options and 24/7 support, reserving your room has never been easier. We offer flexible stay durations to suit your schedule, whether you're here for a short visit or an extended stay. Don't miss out on a comfortable and spiritually enriching experience at Saurashtra Leuva Patel Samaj Bhavan — book today!
    </p>
    <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
      <img
        src="/enq1.png"
        alt="Samaj Bhavan exterior"
        className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-96"
      />
      <img
        src="/enq2.png"
        alt="Dining Hall"
        className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-96"
        style={{objectPosition: 'right'}}
      />
    </div>
  </div>
);

export default EnquiryRoomBooking;
