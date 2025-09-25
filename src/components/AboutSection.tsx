import React from 'react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const team = [
    {
      name: 'Dr. Sarah van Berg',
      role: 'Lead Architect',
      expertise: 'Business Informatics, Digital Transformation',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Prof. Mark de Vries',
      role: 'Research Director',
      expertise: 'Data Interoperability, AI Systems',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
    },
    {
      name: 'Dr. Lisa Chen',
      role: 'Innovation Strategist',
      expertise: 'Smart Agriculture, IoT Integration',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
    },
  ];

  const partners = [
    'Wageningen University & Research',
    'European Commission DG AGRI',
    'GAIA-X Foundation',
    'AgriFood Data Spaces',
    'Dutch Ministry of Agriculture',
    'Food Valley NL',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About WALABI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rooted in Wageningen's world-class research tradition, we bridge academic excellence with practical business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">WUR Heritage</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Built on the foundation of Wageningen University & Research's 100+ year legacy in agricultural innovation, 
              WALABI combines world-class scientific rigor with practical business expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">25+ years combined research experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Projects across 12 EU countries</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Trusted by government, academia, and industry</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
              alt="Wageningen campus"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-white shadow-lg group-hover:ring-blue-100 transition-all duration-300"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-200 border border-gray-200"
              >
                <span className="text-gray-700 font-medium text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;