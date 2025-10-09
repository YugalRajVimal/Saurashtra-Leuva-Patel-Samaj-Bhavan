

const AttractionsNearby = () => (
  <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 px-4 h-fit md:px-0 max-w-screen-xl mx-auto">
    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center items-center h-full">
      <img
        src="/attractions.png"
        alt="Samaj Bhavan Room"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
    {/* Content Section */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
        Explore Nearby Attractions at Saurashtra Leuva Patel Samaj Bhavan, Dwarka
      </h1>
      <p className="text-gray-700 mb-3">
        <span className="font-bold">Saurashtra Leuva Patel Samaj Bhavan, Dwarka</span>, is ideally located to give you easy access to the city’s most revered spiritual and cultural landmarks. Explore the rich heritage of Dwarka while enjoying the comfort and convenience of our accommodation. Here are some key attractions near the Samaj Bhavan:
      </p>
      <ul className="text-gray-700 mb-4">
        <li>Dwarkadhish Temple: 2 Km</li>
        <li>Rukmini Devi Temple: 3 Km</li>
        <li>Gomti Ghat: 2.5 Km</li>
        <li>Nageshwar Jyotirlinga Temple: 5 Km</li>
        <li>Bet Dwarka: 30 Km</li>
        <li>Sudama Setu: 2 Km</li>
        <li>Dwarka Lighthouse: 4 Km</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Transportation Hubs:</h2>
      <ul className="text-gray-700 mb-4">
        <li>Dwarka Railway Station: 3 Km</li>
        <li>Dwarka Bus Stand: 3.5 Km</li>
        <li>Dwarka Taxi Stand: 3 Km</li>
        <li>Dwarka Airport (Dwaraka Airstrip): 2 Km</li>
      </ul>
      <p className="text-gray-700">
        All these attractions and transport hubs are easily accessible from <span className="font-bold">Saurashtra Leuva Patel Samaj Bhavan</span>, making it an ideal base for your spiritual and cultural exploration of <span className="font-bold">Dwarka</span>.
      </p>
    </div>


  </div>
);

export default AttractionsNearby;
