import React from "react";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";
// const { phoneNo } = useContext(MyContext);

const PriceSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6 md:px-12"
      style={{
        backgroundImage: "url('/price.png')", // 🔹 Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
          Saurashtra Leuva Patel Samaj Bhavan Dwarka Price – At All Budgets
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
          At Saurashtra Leuva Patel Samaj Bhavan, Dwarka, we are committed to providing
          accommodation that suits every budget without compromising on comfort or quality.
          Whether you’re here for a spiritual pilgrimage, a family trip, or a short getaway,
          our pricing is designed to be accessible for all. Budget-conscious travelers can
          enjoy our well-maintained, comfortable rooms at affordable rates, while those
          seeking a touch of extra comfort can choose from our premium options, all offered
          at competitive prices.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          Our mission is to deliver excellent value without compromising on cleanliness,
          service, or convenience. Whether you’re staying for a night or an extended visit,
          Saurashtra Leuva Patel Samaj Bhavan ensures a memorable and hassle-free experience
          at the heart of Dwarka. Book your stay today and enjoy the perfect blend of
          affordability, comfort, and convenience in this spiritual city.
        </p>
      </div>
    </section>
  );
};

export default PriceSection;
