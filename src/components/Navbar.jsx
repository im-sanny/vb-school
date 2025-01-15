import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Navigation structure with dropdowns
  const navigationItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About Us',
      link: '/about',
      dropdownItems: [
        { name: 'Vision & Mission', link: '/about/vision-mission' },
        { name: "Principal's Message", link: '/about/principal-message' },
        { name: 'History', link: '/about/history' },
        { name: 'Management Team', link: '/about/management' },
        { name: 'Awards & Recognition', link: '/about/awards' },
      ],
    },
    {
      name: 'Infrastructure',
      link: '/infrastructure',
      dropdownItems: [
        { name: 'Classrooms', link: '/infrastructure/classrooms' },
        { name: 'Laboratories', link: '/infrastructure/labs' },
        { name: 'Library', link: '/infrastructure/library' },
        { name: 'Sports Facilities', link: '/infrastructure/sports' },
        { name: 'Transport', link: '/infrastructure/transport' },
        { name: 'Cafeteria', link: '/infrastructure/cafeteria' },
      ],
    },
    {
      name: 'Admission',
      link: '/admission',
      dropdownItems: [
        { name: 'Admission Process', link: '/admission/process' },
        { name: 'Fee Structure', link: '/admission/fees' },
        { name: 'Application Form', link: '/admission/apply' },
        { name: 'Requirements', link: '/admission/requirements' },
        { name: 'FAQs', link: '/admission/faqs' },
      ],
    },
    {
      name: 'Academics',
      link: '/academics',
      dropdownItems: [
        { name: 'Curriculum', link: '/academics/curriculum' },
        { name: 'Primary School', link: '/academics/primary' },
        { name: 'Middle School', link: '/academics/middle' },
        { name: 'Senior School', link: '/academics/senior' },
        { name: 'Faculty', link: '/academics/faculty' },
        { name: 'Academic Calendar', link: '/academics/calendar' },
      ],
    },
    {
      name: 'Activities',
      link: '/activities',
      dropdownItems: [
        { name: 'Sports', link: '/activities/sports' },
        { name: 'Cultural Events', link: '/activities/cultural' },
        { name: 'Clubs', link: '/activities/clubs' },
        { name: 'School Events', link: '/activities/events' },
        { name: 'Competitions', link: '/activities/competitions' },
      ],
    },
    {
      name: 'Contact Us',
      link: '/contact',
      dropdownItems: [
        { name: 'Location', link: '/contact/location' },
        { name: 'Enquiry Form', link: '/contact/enquiry' },
        { name: 'Career', link: '/contact/career' },
        { name: 'Support', link: '/contact/support' },
      ],
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown hover for desktop
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-50 shadow-lg' : 'bg-gray-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">VB</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-blue-600 font-bold text-xl">
                Vishal Bharti
              </span>
              <span className="text-gray-600 text-sm">
                School of Excellence
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors duration-200"
                >
                  {item.name}
                  {item.dropdownItems && (
                    <span className="ml-1 inline-block">
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  )}
                </a>
                {item.dropdownItems && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200">
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-4 bg-white rounded-lg shadow-lg">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                >
                  {item.name}
                  {item.dropdownItems && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                {item.dropdownItems && activeDropdown === index && (
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
