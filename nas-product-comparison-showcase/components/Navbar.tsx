import React, { useEffect, useState } from "react";
import { Server } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-lg ${
              scrolled
                ? "bg-brand-primary text-white"
                : "bg-white text-brand-primary"
            }`}
          >
            <Server size={24} />
          </div>
          <span
            className={`font-bold text-xl ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            NAS<span className="font-light">Review</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["产品详情", "参数对比", "购买建议"].map((item, idx) => {
            const anchors = ["#products", "#comparison", "#summary"];
            return (
              <a
                key={idx}
                href={anchors[idx]}
                className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                  scrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <button
          className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
            scrolled
              ? "bg-brand-primary text-white hover:bg-brand-dark"
              : "bg-white text-brand-primary hover:bg-blue-50"
          }`}
        >
          分享报告
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
