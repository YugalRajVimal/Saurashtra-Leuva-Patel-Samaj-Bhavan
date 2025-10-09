import { useContext } from "react";
import { MyContext } from "../store/MyContext";



export default function HeroSection() {
  const { phoneNo } = useContext(MyContext);
  return (
    <section
      className="relative  bg-cover bg-center py-20 flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero.png')", // Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Book Budget Stay at <br />
          Saurashtra Leuva Patel Samaj Bhavan <br />
          in Dwarka
        </h1>

        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Looking for a comfortable and budget-friendly stay in Dwarka? Stay at Saurashtra
          Leuva Patel Samaj Bhavan, conveniently located near Dwarka Railway Station. Our clean,
          well-maintained rooms offer the perfect mix of comfort and affordability, making it
          ideal for pilgrims and travelers alike.
        </p>

        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Whether you’re visiting for spiritual purposes or exploring Dwarka’s attractions,
          our prime location provides easy access to temples, markets, and transport. With
          friendly staff and personalized service, we ensure your stay is relaxing, peaceful,
          and hassle-free.
        </p>

        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Our rooms are designed to cater to families, solo travelers, and groups, offering
          modern amenities for a comfortable experience. Enjoy a calm environment, hassle-free
          check-in, and attentive service during your stay. We also provide safe parking, clean
          bathrooms, and cozy common areas to make your visit more convenient.
        </p>

        <p className="text-base md:text-lg mb-8 leading-relaxed">
          Reserve your room at Saurashtra Leuva Patel Samaj Bhavan today for a memorable and
          convenient stay in Dwarka — where comfort meets affordability!
        </p>

        {/* Button */}
        <a
          href={`https://wa.me/${phoneNo}`}
          className="border border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#946b45] transition"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}
