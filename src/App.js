import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, ShoppingBag } from "lucide-react";

/* ----------  IMAGE LIST  ---------- */
const artworks = [
  { src: "/assets/kirby.png",     alt: "Stupid Kirby" },
  { src: "/assets/room2023.png",  alt: "Room Draw 2023" },
  { src: "/assets/sasha.png",     alt: "3-D Sculpt" },
  { src: "/assets/sonichu.png",   alt: "Sonichu B)" },
];

/* ----------  MAIN APP  ---------- */
export default function App() {
  /* Ko-fi floating button */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("SashaYein", {
          type: "floating-chat",
          "floating-chat.donateButton.text":        "Buy me a coffee",
          "floating-chat.donateButton.background-color": "#29abe0",
          "floating-chat.donateButton.text-color":        "#ffffff",
          "floating-chat.donateButton.position":          "Right",
        });
      }
    };
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* ----------  NAV  ---------- */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl shadow-md">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Sasha's Art</h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#about"     className="hover:text-indigo-600">About</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-600">Portfolio</a></li>
            <li><a href="#animation" className="hover:text-indigo-600">Animation</a></li>
            <li><a href="#shop"      className="hover:text-indigo-600">Shop</a></li>
          </ul>
          <a href="#shop" className="md:hidden bg-indigo-600 text-white px-4 py-1 rounded-2xl shadow-md text-sm">
            Shop
          </a>
        </nav>
      </header>

      {/* ----------  HERO  ---------- */}
      <section className="relative flex items-center justify-center h-[80vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">Hi, I'm Sasha!</h2>
          <p className="mt-4 md:text-xl max-w-2xl mx-auto">
            Cybersecurity major by day, digital artist &amp; animator by night.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-white/90 text-indigo-700 font-medium px-6 py-2 rounded-2xl shadow-xl mt-8 text-lg hover:bg-white"
          >
            <ImageIcon size={20} /> Take a look at my work!
          </a>
        </motion.div>
      </section>

      {/* ----------  ABOUT  ---------- */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h3>
        <p className="leading-relaxed text-lg">
          I'm a full-time student studying
          cybersecurity. When I'm not finding exploits or delving into some digital forensics practice, I like to bring characters to life through a variety of ways, such as both traditional and digital illustration, making fursuits, tinkering on my 3d printer to get the perfect models and prints for said suits, and I love practicing both 2-D and 3-D animation.
        </p>
      </section>

      {/* ----------  PORTFOLIO  ---------- */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Portfolio
        </motion.h3>
        <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {artworks.map(({ src, alt }, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group">
              <motion.img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ----------  ANIMATION  ---------- */}
      <section id="animation" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Animation Reel
        </motion.h3>
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Animation Reel"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* ----------  SHOP  ---------- */}
      <section id="shop" className="py-20 bg-gray-50">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2"
        >
          <ShoppingBag size={28} /> Shop
        </motion.h3>
        <div className="flex justify-center px-4 overflow-x-hidden">
          <iframe
            src="https://ko-fi.com/SashaYein/?hidefeed=true&widget=true&embed=true"
            title="Ko-fi Shop"
            className="w-full max-w-[600px] h-[1000px] border-none rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* ----------  FOOTER  ---------- */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Sasha Yein • Hope you have enjoyed your time here so far :3
      </footer>
    </div>
  );
}
