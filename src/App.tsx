import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
// import Hero from "./components/Hero";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-800">
        <ScrollToTop />
        <Navbar />

        {/* Updated flex-grow to grow */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* 404 Route */}
            <Route path="*" element={
                <div className="h-[60vh] flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl font-bold text-blue-600">404</h1>
                    <p className="text-2xl text-slate-700 mt-4">Page Not Found</p>
                    <a href="/" className="mt-6 px-6 py-2 bg-slate-900 text-white rounded hover:bg-slate-700">Go Home</a>
                </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;