import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-r from-yellow-100 to-pink-100 flex items-center justify-center font-sans">
      
      {/* Hero Section - Grid (1 col → 2 cols on md) */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl px-6 py-12 gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
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
        <div className="flex justify-center">
          <img 
            src="/devfest-team.png"
            alt="GDG Durgapur Team" 
            className="rounded-2xl shadow-lg border-4 border-yellow-400 max-w-md w-full h-auto"
          />
        </div>
      </section>

      {/* Decorative Icons (hidden on mobile, visible on md+) */}
      <img 
        src="/icons/light.png" 
        alt="Light bulb" 
        className="hidden md:block absolute top-10 left-10 w-12 h-12 opacity-80 hover:opacity-100 transition pointer-events-none"
      />
      <img 
        src="/icons/globe.png" 
        alt="Globe" 
        className="hidden md:block absolute bottom-16 right-12 w-12 h-12 opacity-80 hover:opacity-100 transition pointer-events-none"
      />
      <img 
        src="/icons/arrow.png" 
        alt="Arrow" 
        className="hidden md:block absolute top-1/2 left-12 w-10 h-10 rotate-12 opacity-80 hover:opacity-100 transition pointer-events-none"
      />
      <img 
        src="/icons/flash.png" 
        alt="Flash" 
        className="hidden md:block absolute top-24 right-20 w-12 h-12 opacity-80 hover:opacity-100 transition pointer-events-none"
      />
    </div>
  );
}
