import React from "react";
import Banner from "../Components/PageBanner";
import GalleryImage from "../Components/GalleryPageComp/Images";

const GalleryPage = () => {
  return (
    <div id="about" className="w-full  bg-cover bg-center">
      <Banner heading={"Gallery"} />
      <GalleryImage />
    </div>
  );
};

export default GalleryPage;
