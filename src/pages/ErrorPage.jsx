import React from 'react';
import { HomeIcon, Search, ArrowLeft, BookOpen, Phone } from 'lucide-react';

const ErrorPage = ({ errorCode = 404, errorMessage = 'Page Not Found' }) => {
  const suggestions = [
    { icon: <HomeIcon size={20} />, text: 'Homepage', link: '/' },
    { icon: <BookOpen size={20} />, text: 'Courses', link: '/courses' },
    { icon: <Phone size={20} />, text: 'Contact Us', link: '/contact' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        {/* Error Illustration */}
        <div className="mb-8 relative">
          {/* <div className="flex justify-center">
            <img
              src="/api/placeholder/400/300"
              alt="Error Illustration"
              className="w-64 h-64 object-contain"
            />
          </div> */}

          {/* Error Code */}
          <h1 className="text-8xl font-bold text-blue-600 mb-4">{errorCode}</h1>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {errorMessage}
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! It seems like you've wandered into uncharted territory. Don't
          worry, learning involves making mistakes sometimes!
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {suggestions.map((suggestion, index) => (
            <a
              key={index}
              href={suggestion.link}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <span className="text-blue-600 mr-2">{suggestion.icon}</span>
              <span className="text-gray-700">{suggestion.text}</span>
            </a>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Go Back
        </button>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If you need assistance, please don't hesitate to{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact our support team
          </a>
          .
        </p>
      </div>

      {/* Background Decoration */}
      <div
        className="absolute inset-0 bg-grid-gray-100 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ErrorPage;
