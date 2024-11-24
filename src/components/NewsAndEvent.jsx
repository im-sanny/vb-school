import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Trophy,
  Newspaper,
  Calendar as CalendarIcon,
  Star,
} from 'lucide-react';

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      id: 1,
      title: 'Our Students Excel in National Science Olympiad',
      date: 'November 20, 2024',
      image: 'https://i.ibb.co.com/hD0rDsg/image-3.png',
      category: 'Academic Achievement',
      excerpt:
        'Five students from our school secured top positions in the National Science Olympiad, demonstrating exceptional scientific aptitude and dedication.',
      readMoreLink: '#',
    },
    {
      id: 2,
      title: 'New STEM Lab Inauguration',
      date: 'November 15, 2024',
      image: 'https://i.ibb.co.com/hD0rDsg/image-3.png',
      category: 'Infrastructure',
      excerpt:
        'State-of-the-art STEM laboratory inaugurated to enhance practical learning experience for our students.',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Annual Sports Meet Concludes',
      date: 'November 10, 2024',
      image: 'https://i.ibb.co.com/hD0rDsg/image-3.png',
      category: 'Sports',
      excerpt:
        'The three-day Annual Sports Meet concluded with outstanding performances and new school records.',
      readMoreLink: '#',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting',
      date: 'December 5, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'School Auditorium',
      category: 'Academic',
      description:
        'Discussing academic progress and student development for the first term.',
    },
    {
      id: 2,
      title: 'Annual Day Celebration',
      date: 'December 15, 2024',
      time: '5:00 PM - 8:00 PM',
      location: 'School Grounds',
      category: 'Cultural',
      description:
        'Showcasing student talents through various cultural performances.',
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: 'December 20, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'School Labs',
      category: 'Academic',
      description: 'Students will present their innovative science projects.',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'State Level Cricket Championship',
      description: 'School team wins state level under-17 cricket tournament',
      date: 'November 2024',
    },
    {
      id: 2,
      title: '100% Board Results',
      description: 'All students clear board exams with distinction',
      date: 'October 2024',
    },
    {
      id: 3,
      title: 'Best School Award',
      description: 'Recognized as the best school in district',
      date: 'September 2024',
    },
  ];

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, upcoming events, and
            achievements at Vishal Bharti School
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {['news', 'events', 'achievements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-colors
                ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* News Tab Content */}
        {activeTab === 'news' && (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Newspaper className="w-4 h-4" />
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <a
                      href={item.readMoreLink}
                      className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements Tab Content */}
        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-sm text-gray-500">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsAndEvents;
