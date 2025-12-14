import React from "react";
// Ensure you have an image at this path, or the onError will trigger
import heroimg from "../assets/heroimg.jpg"; 
import {Link} from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <>
    <section id="home" className="relative bg-linear-to-br from-slate-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs tracking-wide uppercase">
            # Complete IT Solution
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Best Web Design & Development<br/><span className="text-blue-600"> Service Provider</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Grow faster with high-impact web design, powerful development, and results-driven SEO and digital marketing. We build websites that convert and campaigns that bring real customers to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            
            <Link 
            to="/contact"
            className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
              Get Started
            </Link>
            {/* <button className="px-8 py-3.5 bg-white text-slate-800 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition shadow-sm">
              Contact Us
            </button> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex justify-center">
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-blue-200/50 rounded-full blur-3xl opacity-50"></div>
            <img 
              src={heroimg} 
              alt="IT Team Collaboration" 
              className="rounded-2xl shadow-2xl w-full max-w-lg object-cover border-4 border-white transform hover:scale-[1.02] transition duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x500/2563eb/white?text=IT+Solutions';
              }}
            />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;