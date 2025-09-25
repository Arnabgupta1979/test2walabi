import React from 'react';
import { ExternalLink, TrendingUp, Award, Users } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      client: 'EU AgrifoodTEF Consortium',
      challenge: 'Interoperability framework for testing facilities',
      solution: 'Semantic data models and API standards alignment',
      outcome: '40% faster data exchange across 12 countries',
      type: 'Consortium',
      icon: <Users className="h-5 w-5" />,
    },
    {
      client: 'Dutch Dairy Cooperative',
      challenge: 'Legacy system modernization',
      solution: 'Business architecture redesign and migration roadmap',
      outcome: '60% reduction in system complexity, €2M saved',
      type: 'Co-operative',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      client: 'AI for Future Food Systems',
      challenge: 'Smart decision support implementation',
      solution: 'Prescriptive analytics platform architecture',
      outcome: '25% improvement in crop yield predictions',
      type: 'Research',
      icon: <Award className="h-5 w-5" />,
    },
    {
      client: 'Netherlands Ministry of Agriculture',
      challenge: 'National dataspace readiness assessment',
      solution: 'GAIA-X compliance framework and pilot design',
      outcome: 'Policy recommendations adopted nationwide',
      type: 'Government',
      icon: <ExternalLink className="h-5 w-5" />,
    },
    {
      client: 'Precision Farming SME',
      challenge: 'IoT data integration and analytics',
      solution: 'Smart information system design and implementation',
      outcome: '35% increase in operational efficiency',
      type: 'SME',
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Consortium: 'bg-blue-100 text-blue-700',
      'Co-operative': 'bg-green-100 text-green-700',
      Research: 'bg-purple-100 text-purple-700',
      Government: 'bg-orange-100 text-orange-700',
      SME: 'bg-gray-100 text-gray-700',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Results & Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real outcomes from our projects across the agri-food ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  {result.icon}
                  <span className="text-sm font-medium">{result.client}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                  {result.type}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Challenge</h4>
                  <p className="text-gray-900">{result.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Our Solution</h4>
                  <p className="text-gray-700">{result.solution}</p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Outcome</h4>
                  <p className="text-green-600 font-semibold">{result.outcome}</p>
                </div>
              </div>

              <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1">
                <span>View case study</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-blue-100">EU Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-blue-100">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;