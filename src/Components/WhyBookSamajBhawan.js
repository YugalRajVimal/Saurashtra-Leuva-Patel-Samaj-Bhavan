import { ArrowUp } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaRupeeSign,
  FaLock,
  FaRegSmileBeam,
} from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";
// const { phoneNo } = useContext(MyContext);

const attractions = [
  {
    name: "Dwarkadhish Temple",
    distance: "0.5 Km",
    icon: <FaMapMarkerAlt className="text-yellow-500 mr-1 inline" />,
  },
  {
    name: "Rukmini Temple",
    distance: "2 Km",
    icon: <FaMapMarkerAlt className="text-yellow-500 mr-1 inline" />,
  },
  {
    name: "Gomti Ghat",
    distance: "1 Km",
    icon: <FaMapMarkerAlt className="text-green-500 mr-1 inline" />,
  },
  {
    name: "Nageshwar Jyotirlinga Temple",
    distance: "6 Km",
    icon: <FaMapMarkerAlt className="text-green-500 mr-1 inline" />,
  },
  {
    name: "Dwarka Beach",
    distance: "2 Km",
    icon: <FaMapMarkerAlt className="text-gray-700 mr-1 inline" />,
  },
];

const WhyBookSamajBhavan = () => (
  <div className="bg-[#faf8f4] min-h-screen w-full">
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-7">
        Why You Should Book Your Stay at <br /> Saurashtra Leuva Patel Samaj
        Bhavan, Dwarka?
      </h1>
      <p className="text-gray-700 text-center mb-6">
        When planning a visit to Dwarka, finding the perfect accommodation is
        key to ensuring a memorable and comfortable trip.
        <span className="font-bold">
          {" "}
          Saurashtra Leuva Patel Samaj Bhavan
        </span>{" "}
        offers a unique blend of affordability, comfort, and convenience, making
        it the ideal choice for pilgrims, families, and travelers alike. Here’s
        why booking your stay with us is the best decision for your Dwarka
        journey.
      </p>

      <div className="space-y-7">
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Prime Location in the Heart of Dwarka
          </h2>
          <p>
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            is strategically located in the heart of Dwarka, providing easy
            access to major temples and cultural landmarks. From the iconic{" "}
            <span className="font-bold">Dwarkadhish Temple</span> to serene
            ghats and other spiritual sites, our dharamshala allows you to
            explore the city without spending hours in transit.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Comfortable and Affordable Accommodation
          </h2>
          <p>
            We understand that every traveler has different needs and budgets.
            At{" "}
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>
            , we provide a variety of rooms that are both spacious and
            well-maintained, ensuring comfort without breaking the bank. Our
            rooms come with essential amenities such as 24/7 hot water, clean
            linens, free Wi-Fi, and a peaceful environment.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Serene and Peaceful Atmosphere
          </h2>
          <p>
            One of the highlights of staying at{" "}
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            is the tranquil ambiance. Away from the hustle and bustle, our
            property offers a serene retreat for reflection, prayer, and
            relaxation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Friendly and Professional Staff
          </h2>
          <p>
            Our guests appreciate the warmth and professionalism of our team,
            assisting with bookings and guidance to ensure your stay is
            comfortable and hassle-free. Personalized service is a core of our
            hospitality.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Proximity to Key Attractions
          </h2>
          <p>
            Staying at{" "}
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            means you are just a short distance away from Dwarka’s must-visit
            attractions:
          </p>
          <ul className="mt-2 ml-0 space-y-2">
            {attractions.map((e, i) => (
              <li key={i} className="flex items-center text-lg font-medium">
                {e.icon}
                <span className="font-bold">{e.name}</span>: {e.distance}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-3">
            Additionally, transport hubs like the{" "}
            <span className="font-bold">
              Dwarka Railway Station and Bus Stand
            </span>{" "}
            are just a few minutes away.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">Value for Money</h2>
          <p>
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            offers competitive pricing, ensuring you enjoy top-notch facilities
            without exceeding your budget. Every guest receives excellent value
            along with comfort and hospitality.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">
            Safe and Secure Environment
          </h2>
          <p>
            Our property is equipped with{" "}
            <span className="font-bold">24/7 security</span> and offers a safe
            environment for all guests.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">Easy Booking Process</h2>
          <p>
            Booking your stay at{" "}
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            is simple and convenient. Our online reservation system allows you
            to select your room, check availability, and confirm your booking in
            just a few clicks.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-1">Conclusion</h2>
          <p>
            Whether you are visiting Dwarka for spiritual reflection, family
            vacations, or cultural exploration,{" "}
            <span className="font-bold">
              Saurashtra Leuva Patel Samaj Bhavan
            </span>{" "}
            provides the perfect base. Book your stay today and experience the
            warmth and hospitality that travelers have trusted for years.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default WhyBookSamajBhavan;
