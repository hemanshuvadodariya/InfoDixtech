import React from "react";
import { Link } from "react-router-dom";


interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    { title: "Web Design", desc: "Create visually stunning, user-friendly designs that reflect your brand and deliver a seamless experience on every device.", icon: "🎨" },
    { title: "Web Development", desc: "Build fast, secure, and scalable websites using modern technologies to ensure smooth performance and long-term reliability.", icon: "💻" },
    { title: "Search Engine Optimization", desc: "Improve your online visibility with proven SEO strategies that increase traffic, boost rankings, and attract high-intent customers.", icon: "⚙️" },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">Behind the Brand</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Digital Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We deliver expert web design, fast web development, and results-driven SEO to help your business grow online. Our solutions focus on speed, visibility, and long-term digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
              key={index}
            >
              <div className="text-4xl mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition flex items-center gap-1">
                  Core Services <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;