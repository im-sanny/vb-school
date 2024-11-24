import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BookOpen, Trophy, Users, Star } from 'lucide-react';

export default function Banner() {
  const slides = [
    {
      image: 'https://i.ibb.co.com/KLLr3RF/5836.jpg',
      title: 'Nurturing Excellence',
      subtitle: "Shaping Tomorrow's Leaders Today",
      description:
        'Experience world-class education with state-of-the-art facilities and dedicated faculty.',
    },
    {
      image: 'https://i.ibb.co.com/Y3DfGyc/6851481.jpg',
      title: 'Innovation in Learning',
      subtitle: 'Beyond Traditional Education',
      description:
        'Discover our innovative teaching methods and comprehensive curriculum.',
    },
    {
      image: 'https://i.ibb.co.com/6ykb5G4/2482916.jpg',
      title: 'Holistic Development',
      subtitle: 'Building Character & Competence',
      description:
        'Focus on academic excellence, sports, and extra-curricular activities.',
    },
  ];

  // Quick stats data
  const stats = [
    { icon: BookOpen, value: '30+', label: 'Years of Excellence' },
    { icon: Trophy, value: '100%', label: 'Board Results' },
    { icon: Users, value: '5000+', label: 'Happy Students' },
    { icon: Star, value: '50+', label: 'Awards' },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen max-h-[800px] mt-20">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                    <h3 className="text-2xl text-blue-400 mb-6">
                      {slide.subtitle}
                    </h3>
                    <p className="text-lg mb-8">{slide.description}</p>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                        Virtual Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Quick Stats Section */}
      <div className="relative -mt-14 z-10 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="bg-blue-600 text-white py-3 px-4 mt-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Latest News:</span>
            <span>Admissions Open for Academic Year 2024-25</span>
          </div>
          <button className="text-sm underline hover:text-blue-200 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
