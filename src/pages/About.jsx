import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 todo-container">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center">About Task Master</h2>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          <span className="text-indigo-600 font-semibold">Task Master</span> is a professional, 
          full-featured todo application designed to boost your productivity and help you manage your 
          daily tasks efficiently.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              Modern Tech Stack
            </h3>
            <p>Built with React, Express, MongoDB, and Tailwind CSS for a seamless and responsive experience.</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12" y2="20"></line>
              </svg>
              Real-time Updates
            </h3>
            <p>Instantly syncs across all your devices with real-time database connections.</p>
          </div>
        </div>
        
        <p>
          Task Master features a modern UI design with intuitive navigation, responsive layout, and 
          seamless integration with a RESTful backend API. The application is optimized for 
          performance and usability on both desktop and mobile devices.
        </p>
        
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl mt-8 shadow-inner">
          <h3 className="text-xl font-semibold text-indigo-800 mb-3">Getting Started</h3>
          <p>Create your first task by entering it in the input field and clicking the plus button. You can delete tasks when they're completed!</p>
        </div>
      </div>
    </div>
  );
}