import {
  BookOpen,
  Brain,
  GraduationCap,
  Microscope,
  Palette,
  Shield,
  TreeDeciduous,
  Trophy,
  Users,
} from 'lucide-react';

const Choose = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description:
        'Consistently achieving outstanding board results with focus on conceptual learning and practical application.',
      stats: '100% Board Results',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description:
        "Highly qualified and experienced teachers dedicated to nurturing each student's potential.",
      stats: '15:1 Student-Teacher Ratio',
      color: 'green',
    },
    {
      icon: Microscope,
      title: 'Modern Infrastructure',
      description:
        'State-of-the-art laboratories, smart classrooms, and digital learning resources.',
      stats: '20+ Labs & Facilities',
      color: 'purple',
    },
    {
      icon: Trophy,
      title: 'Sports Excellence',
      description:
        'Comprehensive sports program with professional coaching and modern facilities.',
      stats: '25+ Sports Activities',
      color: 'orange',
    },
    {
      icon: Palette,
      title: 'Arts & Culture',
      description:
        'Rich cultural programs fostering creativity and artistic expression.',
      stats: '15+ Cultural Clubs',
      color: 'pink',
    },
    {
      icon: Brain,
      title: 'Skill Development',
      description:
        'Focus on 21st-century skills, leadership, and personality development.',
      stats: '10+ Skill Programs',
      color: 'indigo',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description:
        'Comprehensive security measures with 24x7 surveillance and trained staff.',
      stats: '100% Safe Campus',
      color: 'red',
    },
    {
      icon: GraduationCap,
      title: 'Career Guidance',
      description: 'Dedicated career counseling and higher education guidance.',
      stats: '98% College Placement',
      color: 'yellow',
    },
    {
      icon: TreeDeciduous,
      title: 'Green Campus',
      description: 'Eco-friendly campus promoting environmental consciousness.',
      stats: '5 Acre Green Campus',
      color: 'emerald',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    pink: 'bg-pink-100 text-pink-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    emerald: 'bg-emerald-100 text-emerald-600',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Vishal Bharti School?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We provide a nurturing environment where students excel
            academically, develop personally, and grow into responsible global
            citizens.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${colorClasses[feature.color]}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex items-center text-sm font-medium text-blue-600">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join us in our journey of excellence and discover the difference of
            quality education.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Visit
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-20 bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="https://i.ibb.co.com/dJX0BrF/vecteezy-portrait-of-a-woman-with-long-earrings.jpg"
                alt="Parent Testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 italic mb-4">
                "Choosing Vishal Bharti School for our child was one of the best
                decisions we made. The school's holistic approach to education
                and dedicated faculty have helped our child grow tremendously."
              </p>
              <div className="font-medium text-gray-900">Mrs. Sharma</div>
              <div className="text-sm text-gray-500">
                Parent of Class X Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
