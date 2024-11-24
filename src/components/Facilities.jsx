import { useState } from 'react';
import {
  Monitor,
  Trophy,
  Book,
  FlaskConical,
  Bus,
  Shield,
  ChevronRight,
  Users,
  Camera,
  Music,
  Laptop,
  Wifi,
} from 'lucide-react';

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilities = [
    {
      id: 1,
      title: 'Smart Classrooms',
      icon: Monitor,
      image: 'https://i.ibb.co.com/JHXCnjb/classroom.jpg',
      description:
        'Technology-enabled learning spaces equipped with interactive boards and multimedia systems',
      features: [
        'Interactive whiteboards',
        'Digital projectors',
        'Audio-visual equipment',
        'Student response systems',
      ],
      stats: {
        count: '40+',
        label: 'Smart Classrooms',
      },
    },
    {
      id: 2,
      title: 'Sports Complex',
      icon: Trophy,
      image:
        'https://i.ibb.co.com/XXmf63Z/vecteezy-isometric-tennis-court-illustration-49568340.jpg',
      description:
        'State-of-the-art sports facilities for various indoor and outdoor games',
      features: [
        'Olympic-size swimming pool',
        'Indoor sports arena',
        'Football ground',
        'Basketball courts',
      ],
      stats: {
        count: '10+',
        label: 'Sports Facilities',
      },
    },
    {
      id: 3,
      title: 'Libraries',
      icon: Book,
      image: 'https://i.ibb.co.com/FsZNn1J/LIBRARY18.jpg',
      description:
        'Well-stocked libraries with extensive collection of books, journals, and digital resources',
      features: [
        'Digital catalog system',
        'Reading zones',
        'Reference section',
        'E-library access',
      ],
      stats: {
        count: '50,000+',
        label: 'Books',
      },
    },
    {
      id: 4,
      title: 'Laboratories',
      icon: FlaskConical,
      image:
        'https://i.ibb.co.com/wWFzy33/vecteezy-scientist-man-in-laboratory-room-background-6434898.jpg',
      description:
        'Modern laboratories for Physics, Chemistry, Biology, and Computer Science',
      features: [
        'Advanced equipment',
        'Safety measures',
        'Individual workstations',
        'Digital learning tools',
      ],
      stats: {
        count: '8',
        label: 'Specialized Labs',
      },
    },
    {
      id: 5,
      title: 'Transportation',
      icon: Bus,
      image:
        'https://i.ibb.co.com/TMYTNyC/transport-pictograms-sets-vectors.jpg',
      description:
        'Safe and comfortable transportation service covering all major routes',
      features: [
        'GPS-enabled buses',
        'Trained drivers',
        'First-aid equipment',
        'Route optimization',
      ],
      stats: {
        count: '30+',
        label: 'School Buses',
      },
    },
    {
      id: 6,
      title: 'Safety & Security',
      icon: Shield,
      image:
        'https://i.ibb.co.com/w4ffRby/Shield-security-with-padlock-vector-generated.jpg',
      description: 'Comprehensive security system ensuring student safety',
      features: [
        'CCTV surveillance',
        'Security personnel',
        'Access control',
        'Emergency response system',
      ],
      stats: {
        count: '24/7',
        label: 'Security',
      },
    },
  ];

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our world-class infrastructure and facilities designed to
            provide the best learning environment
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {facility.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-blue-600">
                      <div className="text-2xl font-bold">
                        {facility.stats.count}
                      </div>
                      <div className="text-sm">{facility.stats.label}</div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facility Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(selectedFacility.icon, {
                    className: 'w-6 h-6 text-blue-600',
                  })}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedFacility.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedFacility.description}
                </p>

                <h4 className="font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {selectedFacility.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {selectedFacility.stats.count}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedFacility.stats.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Facilities;
