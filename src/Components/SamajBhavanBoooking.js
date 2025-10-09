
import React from "react";


const SamajBhavanBooking = () => (
  <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 px-4 md:px-0 max-w-7xl  mx-auto">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/samajBooking.png"
        alt="Samaj Bhavan Room"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
    {/* Content Section */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Saurashtra Leuva Patel Samaj Bhavan Dwarka Booking — Say Goodbye To Problems & Stress
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Booking your stay at Saurashtra Leuva Patel Samaj Bhavan, Dwarka is quick, simple, and stress-free. 
        Our easy online booking system lets you reserve your room in just a few clicks, with no hidden charges and 
        transparent, affordable rates—ensuring the best value for your stay.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        We know that travel can be overwhelming, which is why our friendly staff is always ready to assist with any requests, 
        making your arrival and departure smooth and seamless. Whether you’re visiting for spiritual reflection, a family trip, 
        or simply to unwind, we ensure a peaceful, safe, and comfortable stay.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        To make the most of your visit, especially during festive seasons or peak travel periods, we recommend booking early to 
        secure your preferred room and the best rates. Relax and enjoy your time in Dwarka by choosing Saurashtra Leuva Patel Samaj 
        Bhavan, your trusted and convenient home away from home.
      </p>
      <p className="text-lg text-gray-700">
        If you are planning a visit during the festive season, we suggest making the reservations early in advance to acquire better rates.
      </p>
    
    </div>
  </div>
);

export default SamajBhavanBooking;
