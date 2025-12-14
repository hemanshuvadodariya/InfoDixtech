import React from "react";
import services1 from "../assets/services1.jpg";
import { Link } from "react-router-dom";
const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ---------------- Banner ---------------- */}
      <div className="relative bg-slate-900 py-32 text-center text-white overflow-hidden">
        {/* Tailwind v4 Syntax: bg-linear-to-r */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-slate-950 opacity-90 z-10"></div>
        {/* Optional: Add background image via style or class here behind the overlay */}

        <div className="relative container mx-auto px-4 z-20">
          <p className="text-blue-400 font-semibold mb-3 tracking-wide uppercase text-sm"><Link to="/">Home</Link> • Services</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Capabilities</h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            We create fast, user-friendly websites and implement smart SEO strategies that boost visibility, attract customers, and support long-term digital success.          </p>
        </div>
      </div>

      {/* ---------------- Intro ---------------- */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Creating Digital Solutions That Accelerate Your Growth            </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We help businesses move faster with innovative design, reliable development, and strategic digital solutions that improve performance and strengthen long-term success.          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🎯", title: "Our Mission", desc: "Creating smart digital solutions that solve real challenges and support confident business growth." },
            { icon: "🚀", title: "Why Choose Us?", desc: "We blend strategy, creativity, and technology to deliver results that truly make an impact." },
            { icon: "⭐", title: "Our Leadership", desc: "A dedicated team leading every project with expertise, clarity, and a focus on excellence." },
          ].map((item, i) => (
            <div className="bg-slate-50 p-10 rounded-2xl text-center hover:shadow-xl transition border border-slate-100 group" key={i}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- What We Offer ---------------- */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-3">Expertise, Security, and Quality</h2>
              <p className="text-slate-400">End-to-end digital solutions designed to scale with your business.</p>
            </div>
            <Link
              to="/contact"
              className="hidden md:block px-8 py-3 border border-slate-600 rounded-full hover:bg-white hover:text-slate-900 transition font-medium mt-4 md:mt-0">
              Get Free Consultation
            </Link>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Web Design",
              "Web Development",
              "WordPress Development",
              "Shopify Development",
              "App Development",
              "Graphic Design",
              "SEO",
              "Digital Marketing",
            ].map((service, i) => (
              <div
                className="bg-slate-800 p-8 rounded-xl hover:bg-blue-600 transition duration-500 group relative overflow-hidden cursor-pointer"
                key={i}
              >
                <div className="absolute top-2 right-4 text-slate-700 font-bold text-6xl opacity-10 group-hover:text-white group-hover:opacity-20 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-3xl mb-12 text-blue-400 group-hover:text-white transition">⚙</div>
                <h3 className="text-lg font-bold mb-2 group-hover:translate-x-2 transition">{service}</h3>
                <p className="text-sm text-slate-400 group-hover:text-blue-100 group-hover:translate-x-2 transition delay-75">
                  Custom, responsive UI/UX designs that align perfectly with your brand identity.
                </p>
              </div>
            ))}
          </div> */}
          {/* Using ChatGPT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Design",
                desc: "Custom, responsive UI/UX designs that align perfectly with your brand identity."
              },
              {
                title: "Web Development",
                desc: "Robust, secure, and scalable websites built using modern coding standards."
              },
              {
                title: "WordPress Development",
                desc: "Easy-to-manage, custom themes and plugins optimized for speed and flexibility."
              },
              {
                title: "Shopify Development",
                desc: "High-performance e-commerce stores designed to maximize sales and streamline management."
              },
              {
                title: "App Development",
                desc: "Native and cross-platform mobile applications that deliver seamless user experiences."
              },
              {
                title: "Graphic Design",
                desc: "Compelling visuals and branding assets that leave a lasting impression on your audience."
              },
              {
                title: "SEO",
                desc: "Data-driven strategies to improve search rankings and drive sustainable organic traffic."
              },
              {
                title: "Digital Marketing",
                desc: "Targeted campaigns across social and search to grow your reach and ROI."
              },
            ].map((item, i) => (
              <div
                className="bg-slate-800 p-8 rounded-xl hover:bg-blue-600 transition duration-500 group relative overflow-hidden cursor-pointer"
                key={i}
              >
                <div className="absolute top-2 right-4 text-slate-700 font-bold text-6xl opacity-10 group-hover:text-white group-hover:opacity-20 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* <div className="text-3xl mb-12 text-blue-400 group-hover:text-white transition">
                  ⚙
                </div> */}

                <h3 className="text-lg font-bold mb-2 group-hover:translate-x-2 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 group-hover:text-blue-100 group-hover:translate-x-2 transition delay-75">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ---------------- How We Work ---------------- */}
      <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-xl transform rotate-3"></div>
            <img
              src={services1}
              alt="Work process"
              className="relative rounded-xl shadow-2xl w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x600/f1f5f9/gray?text=Our+Process';
              }}
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">How We Work</span>
          <h3 className="text-4xl font-bold mb-8 text-slate-900">How We Deliver Results</h3>
          <div className="space-y-10">
            {[
              { num: 1, title: "Discover & Understand", desc: "We start by learning about your goals, challenges, and requirements to ensure we build the right solution for your business." },
              { num: 2, title: "Design & Develop", desc: "Our team creates strategic designs and develops high-quality, scalable digital solutions tailored to your objectives." },
              { num: 3, title: "Launch & Support", desc: "We deliver a polished final product and provide ongoing optimization and support to keep your digital presence strong." },
            ].map((step, i) => (
              <div className="flex gap-6" key={i}>
                {/* Tailwind v4: shrink-0 */}
                <div className="shrink-0 w-14 h-14 bg-blue-50 text-blue-600 font-bold text-2xl flex items-center justify-center rounded-2xl shadow-sm border border-blue-100">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;