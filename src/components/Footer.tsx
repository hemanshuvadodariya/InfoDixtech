import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2338] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          {/* Left Section: Company Info */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-[#3b82f6] mb-6">InfoDix Tech</h2>
            <p className="text-gray-300 leading-relaxed text-base">
              Get fast, reliable 24/7 support to keep your IT operations running without interruptions.
            </p>
          </div>

          {/* Right Section: Address Company */}
          <div className="md:w-auto">
            <h3 className="text-xl font-bold text-white mb-6">Contact Detail</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#3b82f6]" size={18} />
                <a 
                href="tel:+916353737605"
                className="text-gray-200 font-medium">Call Us : +91 6353737605</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#3b82f6]" size={18} />
                <a 
                href="mailto:working.hemanshu@gmail.com"
                className="text-gray-200 font-medium">Mail: working.hemanshu@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom Section: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          
          {/* Copyright */}
          <div>
            © 2025 InfoDix Tech. All Rights Reserved.
          </div>

          {/* Policy Links */}
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition underline decoration-gray-600 hover:decoration-white underline-offset-4">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition underline decoration-gray-600 hover:decoration-white underline-offset-4">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition underline decoration-gray-600 hover:decoration-white underline-offset-4">Site Map</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;