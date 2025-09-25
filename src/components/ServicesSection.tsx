import React from 'react';
import { GitBranch, TrendingUp, Share2, Brain, Clock, Target } from 'lucide-react';

const ServicesSection = () => {
  const themes = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'Business Architecture',
      description: 'Target architecture map, transformation roadmap, risk & dependency register.',
      timeline: '4–8 weeks',
      outcome: 'Reduced complexity, faster delivery, audit-ready decisions.',
      color: 'blue',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Digital Trends Exploration',
      description: 'Trend briefs, opportunity/risk matrix, pilot concepts, 6-month action agenda.',
      timeline: '2–4 weeks',
      outcome: 'De-risked innovation portfolio tied to business value.',
      color: 'green',
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Interoperability & Data Sharing',
      description: 'Interop gap assessment, semantic model draft, standards alignment plan.',
      timeline: '6–12 weeks',
      outcome: 'Trusted data collaboration; readiness for dataspace onboarding.',
      color: 'orange',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Smart Business Information Systems',
      description: 'System map, reference architecture, integration options, business case.',
      timeline: '8–16 weeks',
      outcome: 'Smarter decisions across the chain (descriptive → prescriptive → generative).',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-300',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        hover: 'hover:border-green-300',
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        hover: 'hover:border-orange-300',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-300',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Four integrated themes that address the complete spectrum of digital transformation in agri-food.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {themes.map((theme, index) => {
            const colorClasses = getColorClasses(theme.color);
            return (
              <div
                key={index}
                className={`group p-8 ${colorClasses.bg} rounded-2xl border-2 ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{theme.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{theme.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Timeline: <strong>{theme.timeline}</strong></span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Target className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Outcome:</strong> {theme.outcome}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-6">
            We package our know-how into 2-pagers, guides, and templates you can use immediately.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;