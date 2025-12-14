import React from "react";
import aboutp from "../assets/aboutp.jpg";
import innovation from "../assets/innovation.jpg";

const Aboutus: React.FC = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm uppercase tracking-wide">
              About us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mt-6 mb-6 leading-tight">
              Innovative Solutions for the Modern Business
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We blend creativity and technology to build user-friendly websites and digital strategies that support long-term growth. Our approach is simple: understand your goals, create meaningful solutions, and help you thrive in a digital-first world.            </p>

            {/* <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex items-center -space-x-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img 
                            src={`https://placehold.co/100x100/cbd5e1/64748b?text=U${i}`} 
                            alt="user"
                            className="w-full h-full object-cover" 
                        />
                    </div>
                ))}
                <div className="ml-6">
                    <p className="font-bold text-slate-900 text-lg">10M+</p>
                    <p className="text-xs text-slate-500">Global Users</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">4.8</h2>
                <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <p className="text-xs text-slate-500 mt-1">Best rated company</p>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200/50 rounded-2xl -z-10 blur-xl"></div>
            <img
              src={aboutp}
              alt="Team Discussion"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x600/1e293b/white?text=Our+Team';
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= DISCOVER SECTION ================= */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-16">Discover InfoDix</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-blue-200 transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver smart, user-focused digital solutions that help businesses grow and operate more efficiently.              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-teal-200 transition">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower brands with modern technology and become a trusted partner for long-term digital success.              </p>
            </div>
          </div>
          <div>
            <img
              src={innovation}
              alt="Innovation Lab"
              className="rounded-2xl shadow-xl w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x700/e2e8f0/gray?text=Innovation';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;