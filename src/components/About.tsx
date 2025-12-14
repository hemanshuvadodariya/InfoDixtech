import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import {Link} from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Images Grid */}
        <div className="relative group">
          <img 
            src={about1} 
            alt="Office Team" 
            className="w-4/5 rounded-xl shadow-lg relative z-10"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Office+Culture';
            }}
          />
          <img 
            src={about2}
            alt="Team Meeting" 
            className="absolute -bottom-10 right-0 w-3/5 border-8 border-slate-50 rounded-xl shadow-2xl z-20 group-hover:scale-105 transition duration-500"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/400x300/2563eb/white?text=Teamwork';
            }}
          />
          {/* Decorative Pattern */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="mt-12 lg:mt-0">
          <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-3 text-sm"># Our Mission & Vision</h4>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Your Trusted Partner for <span className="text-blue-600 relative inline-block">
                Digital Growth
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
            </span> <br />
          </h2>

          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            We combine modern web design, advanced development, and smart SEO to help your business reach more customers and grow faster. Every solution we create is optimized for speed, user experience, and long-term digital success.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
             <div>
                <h3 className="text-3xl font-bold text-slate-800">2</h3>
                <p className="text-sm text-slate-500">Years Experience</p>
             </div>
             {/* <div>
                <h3 className="text-3xl font-bold text-slate-800">500+</h3>
                <p className="text-sm text-slate-500">Projects Done</p>
             </div> */}
          </div>

          <Link 
          to="/about"
          className="px-8 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            Read More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;