import { PhoneCall, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Use Lucide or React Icons for WhatsApp as preferred
import { useContext } from "react";
import { MyContext } from "../store/MyContext";
// const { phoneNo } = useContext(MyContext);

const WhyChooseUs = () => (
  <div className="flex flex-col md:flex-row items-start mt-10 md:mt-20 px-4 md:px-0 max-w-screen-xl mx-auto">
    {/* Content Section */}
    <div className="w-full md:w-1/2 md:pr-8">
      <h3 className="text-lg font-bold mb-2">Why Choose Us</h3>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Why Choose Saurashtra Leuva Patel Samaj Bhavan Dwarka?
      </h1>
      <p className="text-gray-700 mb-4">
        Saurashtra Leuva Patel Samaj Bhavan, Dwarka offers the perfect
        combination of comfort, affordability, and a serene spiritual ambiance,
        making it an ideal choice for your stay. Conveniently located near major
        temples, including the Sri Venkateswara Temple, our dharamshala ensures
        easy access to all the spiritual sites, making your visit hassle-free
        and enjoyable.
      </p>
      <p className="text-gray-700 mb-4">
        Our clean and spacious rooms are thoughtfully equipped with essential
        amenities to provide a restful and comfortable stay. Whether you’re
        visiting for religious purposes, a family trip, or a peaceful retreat,
        we cater to every traveler’s needs with warmth and care.
      </p>
      <p className="text-gray-700 mb-8">
        Enjoy a tranquil environment that complements your spiritual journey
        while experiencing the comfort of our well-maintained accommodations.
        With affordable rates and personalized service, Saurashtra Leuva Patel
        Samaj Bhavan promises a memorable and enriching stay. Book with us today
        and immerse yourself in traditional hospitality in the heart of Dwarka.
      </p>
      {/* Floating Contact Icons */}
      {/* <div className="flex space-x-4 mb-6">
        <a
          href="tel:+919999999999"
          className="flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 shadow-lg hover:bg-yellow-500 transition"
          aria-label="Call"
        >
          <PhoneCall className="text-white w-6 h-6" />
        </a>
        <a
          href="https://wa.me/919999999999"
          className="flex items-center justify-center bg-green-500 rounded-full h-12 w-12 shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </a>
      </div> */}
    </div>
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
      <img
        src="/whyChooseUs.png"
        alt="Samaj Bhavan Room"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
    {/* Floating Upward Arrow (Bottom Right) */}
    {/* <a
      href="#"
      className="fixed bottom-6 right-6 z-50 bg-[#7d5227] rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-[#a86b35] transition"
      aria-label="Scroll to Top"
    >
      <ArrowUp className="text-white w-6 h-6" />
    </a> */}
  </div>
);

export default WhyChooseUs;
