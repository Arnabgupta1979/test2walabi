import React from 'react';
import { FileText, CheckSquare, TrendingUp, Download, ArrowRight } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      type: '2-Pager',
      icon: <FileText className="h-6 w-6" />,
      title: 'Dataspace Readiness Assessment',
      description: 'Quick checklist to evaluate your organization\'s preparedness for data collaboration.',
      downloads: 1250,
      color: 'blue',
    },
    {
      type: 'Checklist',
      icon: <CheckSquare className="h-6 w-6" />,
      title: 'Digital Architecture Review',
      description: 'Step-by-step guide for auditing your current digital infrastructure.',
      downloads: 890,
      color: 'green',
    },
    {
      type: 'Trend Note',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'AI in Agri-Food 2025',
      description: 'Latest insights on artificial intelligence applications in agriculture.',
      downloads: 2100,
      color: 'orange',
    },
    {
      type: '2-Pager',
      icon: <FileText className="h-6 w-6" />,
      title: 'Interoperability Standards Guide',
      description: 'Overview of key standards for agri-food data exchange.',
      downloads: 670,
      color: 'purple',
    },
    {
      type: 'Checklist',
      icon: <CheckSquare className="h-6 w-6" />,
      title: 'Smart System Implementation',
      description: 'Practical steps for deploying intelligent information systems.',
      downloads: 540,
      color: 'blue',
    },
    {
      type: 'Trend Note',
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Sustainable Tech Innovations',
      description: 'Emerging technologies driving sustainability in agri-food.',
      downloads: 930,
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      orange: 'text-orange-600 bg-orange-50 border-orange-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guides, checklists, and trend insights you can apply immediately in your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg border ${getColorClasses(resource.color)}`}>
                  {resource.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Download className="h-3 w-3" />
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1">
                  <span>Download</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get the Complete Resource Kit</h3>
            <p className="text-gray-600 mb-6">
              Access all our 2-pagers, checklists, and guides in one comprehensive package.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <span>Download Complete Kit</span>
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;