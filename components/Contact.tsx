import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-white py-20 overflow-hidden" id="contact">
      {/* Decorative background strokes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72
          bg-gradient-to-br from-purple-200 to-transparent
          rounded-full blur-3xl opacity-30 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96
          bg-gradient-to-tr from-blue-200 to-transparent
          rounded-full blur-3xl opacity-30 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about FEEL or want to know more about mental wellness?
            We're here to help and support you on your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-purple-600">support@goodmind.app</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <p className="text-blue-600">+91 123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-green-600">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300
                        focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300
                        focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                      focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                      focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Event Registration</option>
                    <option>Sponsorship</option>
                    <option>Volunteer Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                      focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600
                      text-white rounded-lg hover:from-purple-700 hover:to-blue-700
                      transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
