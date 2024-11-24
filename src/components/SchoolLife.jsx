import { useState } from 'react';
import {
  Presentation,
  Trophy,
  Music,
  FlaskConical,
  Star,
  Play,
  X,
} from 'lucide-react';

const SchoolLife = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: Star },
    { id: 'classroom', label: 'Classroom', icon: Presentation },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'cultural', label: 'Cultural', icon: Music },
    { id: 'labs', label: 'Labs', icon: FlaskConical },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'classroom',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Interactive Learning Sessions',
      description: 'Students engaged in smart classroom activities',
    },
    {
      id: 2,
      category: 'sports',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Annual Sports Meet',
      description: 'Students showcasing their athletic excellence',
    },
    {
      id: 3,
      category: 'cultural',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Cultural Festival',
      description: 'Annual cultural program performances',
    },
    {
      id: 4,
      category: 'labs',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Science Experiments',
      description: 'Hands-on learning in our advanced laboratories',
    },
    {
      id: 5,
      category: 'classroom',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Group Projects',
      description: 'Collaborative learning activities',
    },
    {
      id: 6,
      category: 'sports',
      image: 'https://i.ibb.co.com/1829c37/b1.jpg',
      title: 'Indoor Sports',
      description: 'State-of-the-art indoor sports facilities',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Student, Class XII',
      content:
        'The diverse range of activities at Vishal Bharti School has helped me develop not just academically but as a complete individual.',
      image:
        'https://i.ibb.co.com/dJX0BrF/vecteezy-portrait-of-a-woman-with-long-earrings.jpg',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Parent',
      content:
        "We're extremely satisfied with the holistic development approach. The school provides excellent opportunities in both academics and extra-curricular activities.",
      image:
        'https://i.ibb.co.com/dJX0BrF/vecteezy-portrait-of-a-woman-with-long-earrings.jpg',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Student, Class X',
      content:
        "The sports facilities and coaching here are exceptional. I've been able to excel in both studies and athletics.",
      image:
        'https://i.ibb.co.com/dJX0BrF/vecteezy-portrait-of-a-woman-with-long-earrings.jpg',
    },
  ];

  const filteredGallery =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">School Life</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant and dynamic environment at Vishal Bharti
            School through our diverse range of activities and achievements
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                  ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Student & Parent Testimonials
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-h-2xl bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImage()}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-52"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedImage.title}
                </h4>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchoolLife;
