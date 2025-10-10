import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";

export default function BookingEnquiry() {
  const { phoneNo } = useContext(MyContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    const { name, phone, date } = formData;

    if (!name || !phone || !date) {
      alert("Please fill all fields before booking.");
      return;
    }

    const message = `Booking Enquiry:%0A--------------------%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0A--------------------%0ARequest from website.`;
    const phoneNumber = phoneNo; // 🔹 Replace with your WhatsApp number (e.g. 91 + number)

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-white text-center px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
        Booking Enquiry - Saurashtra Leuva Patel Samaj Bhavan, Dwarka
      </h2>

      {/* Paragraphs */}
      <div className="max-w-4xl mx-auto text-gray-700 space-y-4 mb-10 text-base md:text-lg leading-relaxed">
        <p>
          Make your stay in Dwarka comfortable and hassle-free with a booking
          enquiry at Saurashtra Leuva Patel Samaj Bhavan, conveniently located
          near the Dwarka Railway Station. Our clean, well-maintained rooms and
          friendly service provide the perfect peaceful retreat while you
          explore the city’s spiritual and cultural wonders.
        </p>

        <p>
          Planning a visit to Dwarka? Choose Saurashtra Leuva Patel Samaj Bhavan
          for an unforgettable stay with affordable rooms, modern amenities, and
          a welcoming atmosphere. Whether you are here for spiritual reflection,
          a family vacation, or simply to unwind, our team ensures you feel
          right at home. We are ready to assist with all your booking inquiries,
          from room availability and pricing to special offers.
        </p>

        <p>
          Don’t wait – book your stay today at Saurashtra Leuva Patel Samaj
          Bhavan and enjoy comfort, convenience, and spiritual tranquility in
          the heart of Dwarka.
        </p>
      </div>

      {/* Subheading */}
      <h3 className="text-2xl font-bold mb-8">
        Check Room Booking Availability
      </h3>

      {/* Form */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-1/4 focus:ring-2 focus:ring-[#946b45] outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-1/4 focus:ring-2 focus:ring-[#946b45] outline-none"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-full md:w-1/4 focus:ring-2 focus:ring-[#946b45] outline-none"
        />

        <button
          onClick={sendToWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
