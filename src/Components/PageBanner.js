const Banner = ({ heading }) => (
  <div className="relative w-full h-[220px] md:h-[310px] lg:h-[350px] flex items-center justify-center overflow-hidden">
    <img
      src="/banner.jpeg" // Place your banner image in /public
      alt="About Us Banner"
      className="absolute w-full object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/30" />
    <h1 className="relative text-white text-4xl md:text-6xl font-bold text-center z-10 tracking-wide">
      {heading}
    </h1>
  </div>
);

export default Banner;
