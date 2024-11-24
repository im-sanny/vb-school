import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  FlaskConical,
  Trophy,
  Pencil,
  GraduationCap,
} from 'lucide-react';

const Academy = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const programs = {
    primary: {
      grades: 'Classes I to V',
      description:
        'Foundation years focusing on core subjects with activity-based learning approach',
      highlights: [
        {
          icon: <BookOpen className="w-6 h-6" />,
          text: 'Core subjects with NCERT curriculum',
        },
        {
          icon: <Users className="w-6 h-6" />,
          text: 'Small class sizes for individual attention',
        },
        {
          icon: <Pencil className="w-6 h-6" />,
          text: 'Activity-based learning methodology',
        },
      ],
      features: [
        'Language development programs',
        'Basic mathematics and science',
        'Environmental awareness',
        'Creative arts and crafts',
        'Physical education',
      ],
    },
    middle: {
      grades: 'Classes VI to VIII',
      description:
        'Comprehensive education with focus on analytical and creative thinking',
      highlights: [
        {
          icon: <FlaskConical className="w-6 h-6" />,
          text: 'Advanced science laboratories',
        },
        {
          icon: <Trophy className="w-6 h-6" />,
          text: 'Sports and extra-curricular activities',
        },
        {
          icon: <GraduationCap className="w-6 h-6" />,
          text: 'Career guidance programs',
        },
      ],
      features: [
        'Advanced mathematics and sciences',
        'Computer science fundamentals',
        'Language arts and literature',
        'Social sciences and civics',
        'Regular assessments and feedback',
      ],
    },
    secondary: {
      grades: 'Classes IX to XII',
      description:
        'Specialized streams preparing students for higher education and careers',
      highlights: [
        {
          icon: <FlaskConical className="w-6 h-6" />,
          text: 'Specialized science and computer labs',
        },
        {
          icon: <Trophy className="w-6 h-6" />,
          text: 'Competitive exam preparation',
        },
        {
          icon: <GraduationCap className="w-6 h-6" />,
          text: 'Career counseling',
        },
      ],
      features: [
        'Science (PCM/PCB)',
        'Commerce with Mathematics',
        'Humanities',
        'Regular mock tests',
        'Olympiad preparation',
      ],
    },
  };

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive academic programs designed to nurture
            young minds and prepare them for future success
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-8">
          {Object.keys(programs).map((level) => (
            <button
              key={level}
              onClick={() => setActiveTab(level)}
              className={`px-6 py-3 text-sm font-medium rounded-lg mx-2 transition-colors
                ${
                  activeTab === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)} Section
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {programs[activeTab].grades}
            </h3>
            <p className="text-gray-600">{programs[activeTab].description}</p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {programs[activeTab].highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-blue-600">{highlight.icon}</div>
                <p className="text-gray-700">{highlight.text}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {programs[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
