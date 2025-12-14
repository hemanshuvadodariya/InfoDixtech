import React from "react";

interface Feature {
  icon: string;
  title: string;
  text: string;
}

const WhyChooseUs: React.FC = () => {
  const services: Feature[] = [
    { icon: "💻", title: "Trusted Digital Experts", text: "Skilled experts delivering tailored web design, development, and digital marketing solutions." },
    { icon: "📈", title: "Growth-Focused Strategies", text: "Every project is built to boost traffic, conversions, and online visibility." },
    { icon: "📊", title: "Fast, Secure, Build Scalable", text: "Modern, reliable technologies ensure fast and flawless performance across devices." },
    { icon: "📱", title: "Reliable Ongoing Support", text: "Ongoing updates, maintenance, and support keep your digital presence strong." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/20 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h4 className="text-blue-400 font-bold uppercase tracking-wider mb-3 text-sm">Why Select Us</h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transparent Process & Clear Communication <br />
            {/* Tailwind v4 Linear Gradient */}
            {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-400">
              Form Of IT
            </span> */}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300 group hover:-translate-y-1" 
              key={index}
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;