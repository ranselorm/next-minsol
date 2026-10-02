import React from "react";

// const stats = [
//   {
//     value: "134K ton",
//     description: "Foundry manufacturing capacity",
//     icon: "🟠",
//   },
//   {
//     value: "600K ton",
//     description: "Grinding media manufacturing capacity",
//     icon: "🟠",
//   },
// ];

const PlantsAndOffices: React.FC = () => {
  // const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="py-8 bg-white text-grey">
      <div className="container mx-auto  px-4 md:px-20">
        {/* <header className="text-center my-12">
          <h1 className="text-3xl">
            We have seven plants located around the globe
          </h1>
        </header> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center md:border-r border-gray-300 last:border-r-0"
            >
              <div>
                <h2 className="text-6xl font-medium text-blu">{stat.value}</h2>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-orange-500 text-2xl">{stat.icon}</span>
                  <p className="ml-2 text-gray-700">{t(stat.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Map Section */}
        {/* <div className="relative bg-white w-full h-[400px] border-0">
          {!isMapLoaded && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
              <p className="text-gray-500">Loading map...</p>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.41692154888!2d-0.16634725614328758!3d5.630376460200775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a1908339bb9%3A0x123456789abcdef!2s4%20Apple%20Avenue%2C%20East%20Legon%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1698500000000!5m2!1sen!2sus"
            className="w-full h-full"
            onLoad={() => setIsMapLoaded(true)}
            allowFullScreen
            loading="lazy"
            title="4 Apple Avenue Map"
          ></iframe>
        </div> */}
        <div className="mb-6">
          <img
            src="/images/map.png"
            alt=""
            className="md:w-full h-[300px] md:h-[450px] object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default PlantsAndOffices;
