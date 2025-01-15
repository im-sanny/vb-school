import { Book, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [announcement, setAnnouncement] = useState(
    'Registration open for admission in classes LKG, UKG and I for the session (2025-26)'
  );

  const slides = [
    {
      image: 'https://i.ibb.co.com/WGFLrMQ/2053-R0l-VIE5-JQy-A0-MTUt-NTE-1.jpg',
      title: "Nurturing Tomorrow's Leaders",
      description: 'Excellence in Education Since 1995',
    },
    {
      image: 'https://i.ibb.co.com/q0ptddB/1849-R0l-VIEp-FTi-A3-MDgt-NTE-1.jpg',
      title: 'State-of-the-Art Facilities',
      description: 'Modern Labs, Sports Complex, and Smart Classrooms',
    },
    {
      image:
        'https://i.ibb.co.com/dgBzHPp/education-line-icon-collection-1.jpg',
      title: 'Holistic Development',
      description: 'Academics, Sports, Arts, and More',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    {
      icon: <GraduationCap size={20} />,
      label: 'Admissions',
      count: '98% Placement',
    },
    { icon: <Calendar size={20} />, label: 'Events', count: '50+ Annual' },
    { icon: <Book size={20} />, label: 'Programs', count: '25+ Courses' },
  ];

  return (
    <div className="relative mt-20">
      {/* Announcement Banner */}
      <div className="bg-blue-600 text-white px-4 py-2 text-center">
        <Marquee>
          <p className="text-sm font-medium">{announcement}</p>
        </Marquee>
      </div>

      {/* Hero Content */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Slideshow */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="relative min-w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col justify-center h-full text-white">
            {/* School Logo */}
            <div className="mb-8">
              <img
                src="https://i.ibb.co.com/Wv3Jc3C/letter-v.png"
                alt="School Logo"
                className="w-24 h-24"
              />
            </div>

            {/* Hero Text */}
            <h1 className="text-5xl font-bold mb-4 transition-opacity duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl mb-8 max-w-2xl transition-opacity duration-500">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Apply Now
                <ChevronRight size={20} className="ml-2" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Virtual Tour
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all cursor-pointer"
                >
                  <div className="flex items-center mb-2">
                    {link.icon}
                    <span className="ml-2 font-medium">{link.label}</span>
                  </div>
                  <p className="text-sm opacity-90">{link.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
