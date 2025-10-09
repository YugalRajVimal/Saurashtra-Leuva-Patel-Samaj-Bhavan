import React from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";

export default function WelcomeSection() {
const { phoneNo } = useContext(MyContext);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-white py-12 px-6 lg:px-16">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="/welcome.png" // replace with actual image path
          alt="Saurashtra Leuva Patel Samaj Bhavan"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Saurashtra <br />
          Leuva Patel Samaj <br />
          Bhavan in Dwarka
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nestled in the heart of Dwarka, Saurashtra Leuva Patel Samaj Bhavan
          offers a peaceful and comfortable retreat for pilgrims, families, and
          travelers alike. With affordable rates and exceptional service, we
          ensure your stay is not only convenient but truly memorable. Whether
          you’re visiting the Sri Venkateswara Temple or exploring Dwarka’s
          spiritual landmarks, our central location gives you easy access to all
          key attractions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our well-kept rooms are thoughtfully designed with your comfort in
          mind, featuring free Wi-Fi, hot water, and cozy bedding to help you
          relax and rejuvenate after a day of spiritual exploration. The serene
          and devotional ambiance at Saurashtra Leuva Patel Samaj Bhavan makes
          it the perfect place for reflection, rest, and peaceful downtime.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Book your stay with us and experience the perfect harmony of comfort,
          affordability, and spiritual tranquility. Let us make your visit to
          Dwarka a truly enriching and unforgettable experience!
        </p>

        <a
          href={`https://wa.me/${phoneNo}`}
          className="bg-[#8B6B47] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#725639] transition duration-300"
        >
          BOOK NOW
        </a>
      </div>



    
    </section>
  );
}
