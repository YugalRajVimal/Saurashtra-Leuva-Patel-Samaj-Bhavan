import React from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { FaBed, FaSpa, FaUtensils, FaPercent, FaHotel } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";



const cardsData = [
  {
    icon: <FaBed className="text-5xl text-[#7b542c]" />,
    title: "Quality Room",
    desc: `Our quality rooms at Saurashtra Leuva Patel Samaj Bhavan are designed to offer a comfortable and peaceful retreat after a day of exploring Dwarka. Each room is well-maintained, spacious, and equipped with essential amenities to ensure a relaxing stay. The clean linens, 24/7 hot water, and comfortable beds provide the perfect environment for rest. Whether you’re here for a spiritual journey or a family trip, our rooms offer the ideal balance of comfort and affordability. Enjoy a restful stay with us and feel at home in every moment.`,
  },
  {
    icon: <GiPalmTree className="text-5xl text-[#7b542c]" />,
    title: "Peaceful Retreat Near Dwarka",
    desc: `While Saurashtra Leuva Patel Samaj Bhavan is conveniently located in the heart of Dwarka, it offers guests a serene and peaceful environment to unwind. Surrounded by calm and tranquil surroundings, our property provides the perfect escape from the city’s hustle. Guests can enjoy quiet walks, relax in the peaceful ambiance, or simply soak in the calm after a day of visiting temples and exploring local attractions. Whether you’re looking for a moment of reflection, a family outing, or a peaceful retreat, the serene atmosphere ensures a rejuvenating stay.`,
  },
  {
    icon: <FaHotel className="text-5xl text-[#7b542c]" />,
    title: "Best Accommodation",
    desc: `At Saurashtra Leuva Patel Samaj Bhavan, we offer the best accommodation for pilgrims, travelers, and families visiting Dwarka. Our rooms are thoughtfully designed to provide the perfect balance of comfort and affordability. Equipped with essential amenities such as comfortable beds, hot water, and free Wi-Fi, we ensure a hassle-free stay. Whether you’re here for a short visit or a longer stay, our accommodations provide a peaceful and serene environment.`,
  },
  {
    icon: <FaSpa className="text-5xl text-[#7b542c]" />,
    title: "Wellness & Spa",
    desc: `At Saurashtra Leuva Patel Samaj Bhavan, we believe in offering more than just a place to stay; we provide an experience of relaxation and rejuvenation. Our Wellness & Spa services are designed to help you unwind after a long day of spiritual exploration. Indulge in soothing spa treatments, massages, and wellness therapies that rejuvenate both your body and mind.`,
  },
  {
    icon: <FaUtensils className="text-5xl text-[#7b542c]" />,
    title: "Restaurants",
    desc: `At Saurashtra Leuva Patel Samaj Bhavan, we offer a delightful dining experience with our restaurants and bars. Enjoy a variety of local delicacies and international cuisines prepared with fresh ingredients to satisfy every palate. Our in-house restaurant provides a warm and welcoming atmosphere, perfect for a relaxing meal.`,
  },
  {
    icon: <FaPercent className="text-5xl text-[#7b542c]" />,
    title: "Special Offers",
    desc: `At Saurashtra Leuva Patel Samaj Bhavan, we believe in providing value to our guests with exciting special offers. Whether you're planning a spiritual retreat or a family vacation, our exclusive deals ensure you get the best accommodation at unbeatable prices. Take advantage of seasonal discounts and group booking offers.`,
  },
];

export default function AmenitiesSection() {
  return (
    <section className="relative bg-[#FCFAF8] py-16 px-2  md:px-24 text-center">
      {/* Subheading */}
      <p className="text-[#8B6B47] font-semibold text-lg mb-2">
        Top Notch Amenities
      </p>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        Best Facilities & Amenities at Saurashtra <br />
        Leuva Patel Samaj Bhavan, Dwarka
      </h2>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed">
        <p>
          At Saurashtra Leuva Patel Samaj Bhavan, we provide a wide range of
          premium facilities and thoughtful amenities to make your stay
          comfortable, convenient, and memorable. Our spacious, well-maintained
          rooms come equipped with essentials like 24/7 hot water, cozy beds,
          and fresh linens to ensure a relaxing stay.
        </p>

        <p>
          Stay connected with free Wi-Fi throughout the property, perfect for
          keeping in touch with loved ones or attending to business needs. Our
          friendly and attentive staff is always ready to assist with travel
          arrangements, local guidance, or any special requests, making your
          visit completely hassle-free.
        </p>

        <p>
          Your safety is our priority, with 24/7 security and a secure
          environment so you can enjoy your stay with peace of mind. Whether you
          are visiting for spiritual purposes, a family vacation, or business,
          Saurashtra Leuva Patel Samaj Bhavan offers exceptional service,
          comfort, and convenience to cater to every traveler’s needs.
        </p>
      </div>



 
      <div className="bg-[#f9f8f4] py-16 px-2 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
