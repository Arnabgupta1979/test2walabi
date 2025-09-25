import React from 'react';
import { Users, Building, GraduationCap, Briefcase, Globe } from 'lucide-react';

const WhoWeHelpSection = () => {
  const clientTypes = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Co-operatives',
      description: 'Agricultural cooperatives seeking digital transformation and data sharing capabilities.',
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Ministries',
      description: 'Government bodies developing agricultural policy and digital infrastructure.',
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Research Institutes',
      description: 'Academic institutions advancing agri-food innovation through technology.',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'SMEs',
      description: 'Small and medium enterprises in the agri-food value chain.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'EU Consortia',
      description: 'European research consortiums and collaborative innovation projects.',
    },
  ];

  return (
    <section id="who-we-help" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with organizations across the agri-food ecosystem to unlock the potential of digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100"
            >
              <div className="text-blue-600 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{client.title}</h3>
              <p className="text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;