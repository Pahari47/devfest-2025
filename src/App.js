import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-100 flex items-center justify-center font-sans">
      
      {/* Hero Section - Split into 2 columns */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-12 gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          {/* Title */}
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-blue-500">{'{'}</span>
            DevFest
            <span className="text-blue-500">{'}'}</span>
          </h1>
          
          {/* Year */}
          <span className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full text-lg shadow-md">
            2025
          </span>

          {/* Location */}
          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            Durgapur
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-700 max-w-xl">
            Ignite Your Development Journey with Google Developer Groups. 
            Dive deep into the latest technologies, connect with developers, 
            and be part of the global GDG community.
          </p>

          {/* Date & Location */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-lg">
            <span className="flex items-center gap-2">
              📅 <b>To Be Announced</b>
            </span>
            <span className="flex items-center gap-2">
              📍 <b>Srijani Auditorium</b>
            </span>
          </div>

          {/* CTA */}
          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition px-8 py-3 rounded-xl text-lg font-bold shadow-lg">
            Coming Soon 🚀
          </button>

          {/* Keep in Touch + Social Links block */}
          <div className="mt-12">
            <p className="text-gray-800 font-medium text-lg">
              Keep in touch for more announcements 
            </p>

            <div className="mt-6 flex gap-6 justify-center md:justify-start text-2xl">
              <a 
                href="https://www.instagram.com/gdg.durgapur/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-yellow-400 p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/gdgdurgapur/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-yellow-400 p-3 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.facebook.com/gdgdurgapur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-yellow-400 p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/devfest-team.png"   // <-- put your team photo inside "public" folder with this name
            alt="GDG Durgapur Team" 
            className="rounded-2xl shadow-lg border-4 border-yellow-400 max-w-md"
          />
        </div>
      </section>

      {/* Decorative Icons (Responsive positioning) */}
      <img 
        src="/icons/light.png" 
        alt="Light bulb" 
        className="absolute top-4 left-4 w-8 h-8 md:top-10 md:left-10 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition"
      />

      <img 
        src="/icons/globe.png" 
        alt="Globe" 
        className="absolute bottom-6 right-6 w-8 h-8 md:bottom-16 md:right-12 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition"
      />

      <img 
        src="/icons/arrow.png" 
        alt="Arrow" 
        className="absolute top-1/3 left-4 w-6 h-6 rotate-12 md:top-1/2 md:left-12 md:w-10 md:h-10 opacity-80 hover:opacity-100 transition"
      />

      <img 
        src="/icons/flash.png" 
        alt="Flash" 
        className="absolute top-16 right-6 w-8 h-8 md:top-24 md:right-20 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition"
      />
    </div>
  );
}
