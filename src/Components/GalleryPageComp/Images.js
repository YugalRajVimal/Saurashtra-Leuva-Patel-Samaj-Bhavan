const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",

  ];
  
  export default function GalleryImage() {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center px-0 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-12">
          {images.map((src, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="object-cover rounded-md shadow-md w-[420px] h-[290px] bg-white"
              />
            </div>
          ))}
        </div>
     
      </div>
    );
  }
  