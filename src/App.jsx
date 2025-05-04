import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 text-gray-800">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-md overflow-hidden">
        <div className="container mx-auto h-16 flex items-center justify-center space-x-6 px-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
          ].map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={
                  `inline-flex items-center justify-center h-10 px-4 rounded-full transition duration-200 ` +
                  (isActive
                    ? 'bg-indigo-100 text-indigo-700 font-medium shadow-sm'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600')
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* HERO: Organize Your Day */}
      <header className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
            Organize Your Day
          </h1>
          <div className="mt-2 mx-auto w-16 h-1 bg-indigo-400 rounded-full opacity-80"></div>
          <p className="mt-4 text-gray-700">
            Transform your productivity with our intelligent task management system
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Task Master | Designed with ❤️</p>
      </footer>
    </div>
  );
}