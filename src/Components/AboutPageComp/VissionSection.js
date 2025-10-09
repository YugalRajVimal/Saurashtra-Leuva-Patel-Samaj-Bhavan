import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const VisionSection = () => (
  <div className="relative bg-white min-h-screen flex flex-col justify-center items-center">
    <div className="max-w-screen-xl mx-auto flex h-full flex-col md:flex-row items-center justify-center py-10 md:py-20 px-3 md:px-0 gap-3 md:gap-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex h-full items-center justify-center">
        <img
          src="/vission.png"
          alt="Samaj Bhavan Entry"
          className="rounded-lg shadow-lg w-full my-auto max-h-[400px] object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-5">
          Our Vision at Saurashtra Leuva Patel Samaj Bhavan, Dwarka
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            At Saurashtra Leuva Patel Samaj Bhavan, our vision is to provide
            every guest with a peaceful, affordable, and spiritually enriching
            stay in the heart of Dwarka. We aim to create an environment where
            visitors can find comfort, serenity, and a sense of connection to
            their spiritual journey. Our goal is to offer the best of both
            worlds: traditional hospitality and modern conveniences.
          </p>
          <p>
            We aspire to be a trusted haven for pilgrims, families, and
            travelers, ensuring each guest feels at home and rejuvenated during
            their stay. By offering affordable rates, top-notch services, and a
            devotional ambiance, we aim to enhance every guest’s experience.
          </p>
          <p>
            Our vision is not just about providing accommodation — it’s about
            creating a lasting connection with every guest, ensuring they leave
            with a sense of peace, satisfaction, and a desire to return. We are
            committed to offering flexible booking options, 24/7 customer
            support, and personalized services to meet the unique needs of every
            guest.
          </p>
          <p>
            As we grow, we strive to maintain the highest standards of
            hospitality while preserving the authentic charm and spirituality
            that make Dwarka a special destination. We want Saurashtra Leuva
            Patel Samaj Bhavan to be a place where guests not only find comfort
            but also find an opportunity for spiritual reflection and growth.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default VisionSection;
