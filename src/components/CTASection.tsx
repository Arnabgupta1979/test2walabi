import React, { useState } from 'react';
import { Calendar, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Book Intake */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
            </div>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Book a free 20-minute intake call to discuss your digital transformation challenges and explore how we can help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>No obligation consultation</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>Tailored recommendations</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="h-5 w-5" />
                <span>Clear next steps</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg">
              <Calendar className="h-5 w-5" />
              <span>Book Your Intake Call</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Newsletter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Stay Informed</h3>
            </div>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Get monthly insights on agri-food digital trends, new resources, and exclusive case study previews.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-blue-200">
                  No spam, unsubscribe anytime. Read our privacy policy.
                </p>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-center space-x-3 text-green-100">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Thanks for subscribing!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-blue-100 text-lg">
            Join leading organizations making digital transformation work in agri-food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;