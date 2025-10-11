import React, { useContext } from "react";
import { MyProvider } from "./store/MyContext";

import Nav from "./Components/Nav";
import HomeImageComponent from "./Components/HomeImageComponent";
import GalleryComponent from "./Components/GalleryComponent";

import Footer from "./Components/Footer";

import AboutPage from "./Pages/AboutPage";
import HotelFacilityPage from "./Components/HotelFacilityPage";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import NiharikaRetreat from "./Components/NiharikaRetreat";
import BookingCTA from "./Components/BookingCTA";
import NearbyAttractions from "./Components/NeabyAttractions";
import FloatingIcons from "./Components/FloatingIcons";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomeSection from "./Components/WelcomeSection";
import RoomsSection from "./Components/RoomSection";
import Amenities from "./Components/HotelFacilityPage";
import AmenitiesSection from "./Components/AmenitiesSection";
import PriceSection from "./Components/PriceSection";
import SamajBhavanBooking from "./Components/SamajBhavanBoooking";
import WhyChooseUs from "./Components/WhyChooseUs";
import AttractionsNearby from "./Components/Attractionsnearby";
import EnquiryRoomBooking from "./Components/EnquiryRoomBooking";
import WhyBookSamajBhavan from "./Components/WhyBookSamajBhawan";
import GalleryPage from "./Pages/GalleryPage";
import ContactUs from "./Pages/ContactUs";
import BookingEnquiry2 from "./Components/ContactPageComp/BookingEnquiry";
import BookingEnquiry from "./Components/BookingEnquiry";

const App = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={
              <div className="relative w-full overflow-hidden">
                <HomeImageComponent />
                <BookingEnquiry />
                <WelcomeSection />
                <RoomsSection />
                <GalleryComponent />
                <AmenitiesSection />
                <PriceSection />
                <SamajBhavanBooking />
                <WhyChooseUs />
                <AttractionsNearby />
                <Testimonials />
                <EnquiryRoomBooking />
                <WhyBookSamajBhavan />
<BookingEnquiry2 />

                {/* <AboutPage />
                <NiharikaRetreat />
                <BookingCTA />
                <HotelFacilityPage />
                <Gallery />
                <NearbyAttractions /> */}
                {/* 
      <BirlaDharamshala /> */}
              </div>
            }
          />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<GalleryPage />} />

          {/* <Route path="/call" element={<Navigate replace to="/" />} />
          <Route path="/whatsapp" element={<Navigate replace to="/" />} /> */}
        </Routes>
        <Footer />
        <FloatingIcons />
      </MyProvider>
    </BrowserRouter>
  );
};

export default App;
