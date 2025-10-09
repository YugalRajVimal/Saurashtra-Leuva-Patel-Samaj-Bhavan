import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";


const reviewers = [
  {
    name: "Rajesh kumar",
    image: "/reviewer1.jpg",
    text: "A wonderful place for devotees seeking a calm and sacred stay. The rooms were neat, hygienic, and spacious enough for my family. The staff ensured we had everything we needed, and the overall hospitality was excellent. It felt like a home away from home.",
  },
  {
    name: "Anjali Singh",
    image: "/reviewer2.jpg",
    text: "Staying at Saurashtra Leuva Patel Samaj Bhavan was a delightful experience. The environment was peaceful, perfect for meditation and prayer. The rooms were simple yet well-equipped with all basic amenities. I was impressed with the cleanliness and prompt service. Will definitely stay here again!",
  },
  {
    name: "Mukesh Tiwari",
    image: "/reviewer3.jpg",
    text: "The best part of Saurashtra Leuva Patel Samaj Bhavan was its affordability without compromising on comfort. The family room we booked was spacious, and the beds were cozy. The atmosphere was perfect for a devotional visit, and the surroundings were calm and quiet. Highly recommended for families and groups!",
  }
];

export default function TestimonialSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-20 flex flex-col items-center">
      <span className="font-bold text-brown-800 text-md mb-2">Testimonial</span>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-6">
        What Our Clients Says About <br /> Saurashtra Leuva Patel Samaj Bhavan Dwarka
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mb-3">
        At Saurashtra Leuva Patel Samaj Bhavan, we pride ourselves on offering every guest a memorable and peaceful stay. Visitors often praise the serene atmosphere and tranquil environment, making their time with us truly rejuvenating. Our comfortable rooms and affordable rates cater perfectly to the needs of pilgrims, families, and travelers alike.
      </p>
      <p className="text-gray-600 text-center max-w-3xl mb-3">
        Guests consistently highlight the warmth and professionalism of our staff, always ready to assist and ensure a hassle-free experience. The close proximity to major temples, including Dwarkadhish Temple and other spiritual landmarks, is another aspect our visitors love, allowing them to fully immerse themselves in Dwarka’s sacred charm.
      </p>
      <p className="text-gray-600 text-center max-w-3xl mb-10">
        Many of our guests leave with a sense of calm and fulfillment, eager to return on their next visit. Join the growing community of satisfied travelers who have chosen Saurashtra Leuva Patel Samaj Bhavan as their trusted accommodation in Dwarka.
      </p>
      <Swiper
        modules={[Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 32 },
          1200: { slidesPerView: 3, spaceBetween: 32 },
        }}
        pagination={{ clickable: true }}

        className="w-full"
      >
        {reviewers.map((reviewer, idx) => (
          <SwiperSlide key={reviewer.name}>
            <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center max-w-sm mx-auto h-full">
              {/* <img src={reviewer.image} alt={reviewer.name} className="w-20 h-20 rounded-full mb-2 object-cover" /> */}
              <h3 className="font-bold text-xl text-[#7d5227] mb-1">{reviewer.name}</h3>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar className="w-5 h-5 text-[#7d5227]" key={i} />
                ))}
              </div>
              <p className="text-gray-700 text-center">{reviewer.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
