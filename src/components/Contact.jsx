import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or our programs? We're here to help!
            Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-600 mr-3" size={24} />
              <h3 className="font-semibold text-gray-800">Visit Us</h3>
            </div>
            <p className="text-gray-600">
              123 Education Avenue
              <br />
              Academic District
              <br />
              City, State 12345
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Phone className="text-blue-600 mr-3" size={24} />
              <h3 className="font-semibold text-gray-800">Call Us</h3>
            </div>
            <p className="text-gray-600">
              Main: (555) 123-4567
              <br />
              Admissions: (555) 123-4568
              <br />
              Fax: (555) 123-4569
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-blue-600 mr-3" size={24} />
              <h3 className="font-semibold text-gray-800">Office Hours</h3>
            </div>
            <p className="text-gray-600">
              Monday - Friday
              <br />
              8:00 AM - 4:00 PM
              <br />
              Closed on Holidays
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded h-[100px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
            <img
              src="https://i.ibb.co.com/stMQH5m/global-vector-map.jpg"
              alt="School Location Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(
              (platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                >
                  {platform}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
