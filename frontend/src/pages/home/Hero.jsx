import { useState } from "react"; 
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (query || location) {
      navigate(`/search?query=${query}&location=${location}`);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/src/assets/traveller-with-map-mobile-phone-medium-shot.jpg')] bg-cover bg-center -z-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Hero Content */}
      <section className="relative z-10 text-center text-white w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-snug">
          Find Local Services Near You
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 drop-shadow-md">
          Search trusted providers for your daily needs
        </p>

        {/* Search Bar - single row even on mobile */}
        <div className="flex w-full max-w-3xl bg-white/30 backdrop-blur-md rounded-full overflow-hidden shadow-lg mx-auto">
          <input
            type="text"
            placeholder="What e.g. plumber, electrician..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search services"
            className="flex-1 px-4 sm:px-6 py-3 text-white outline-none placeholder-white text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Where e.g. your city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Search location"
            className="flex-1 px-4 sm:px-6 py-3 text-white outline-none placeholder-white border-l border-white/40 text-sm sm:text-base"
          />
          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="bg-aqua hover:bg-aqua/50 text-white px-4 sm:px-6 py-3 flex items-center justify-center transition-colors duration-300"
          >
            <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <div className="flex flex-col tracking-wide md:flex-row absolute bottom-6 sm:bottom-10 w-[50%] md:max-w-xl items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 mx-auto">
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-white text-center md:text-left">
          Are you a service provider?
        </h2>
        <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-aqua text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition text-sm sm:text-base">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Hero;



