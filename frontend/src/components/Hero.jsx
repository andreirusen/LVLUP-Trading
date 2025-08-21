import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--accent-bg)] text-[var(--accent-primary)] text-sm font-medium mb-6">
              <Award size={16} className="mr-2" />
              Professional Trading Community
            </div>
            
            <h1 className="display-lg mb-6">
              Learn, Grow and <span className="text-[var(--accent-primary)]">Win Together</span> Through Trading
            </h1>
            
            <p className="body-lg mb-8 max-w-xl">
              Join LVLUP University and master Smart Money Concepts, risk management, and trading psychology. 
              Transform your trading journey with expert guidance and a supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Start Your Journey
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('profits')}
                className="btn-secondary"
              >
                View Results
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h3 text-[var(--accent-primary)] mb-2">5+</div>
                <div className="body-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="h3 text-[var(--accent-primary)] mb-2">500+</div>
                <div className="body-sm">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="h3 text-[var(--accent-primary)] mb-2">95%</div>
                <div className="body-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Trading Visual */}
          <div className="lg:text-right">
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-2xl p-8 border border-[var(--border-subtle)] shadow-2xl">
                <div className="space-y-6">
                  {/* Trading Chart Mockup */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="text-[var(--accent-primary)]" size={24} />
                      <div>
                        <div className="h4">EUR/USD</div>
                        <div className="body-sm">Smart Money Analysis</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="h4 text-[var(--accent-primary)]">+2.45%</div>
                      <div className="body-sm">Daily P&L</div>
                    </div>
                  </div>

                  {/* Mock Chart Bars */}
                  <div className="flex items-end space-x-2 h-32">
                    {[65, 45, 80, 35, 90, 55, 75, 60, 85, 40, 95, 70].map((height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t ${
                          height > 60 ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-primary)]'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  {/* Trading Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    <div>
                      <div className="body-sm">Profit Factor</div>
                      <div className="h4 text-[var(--accent-primary)]">3.2</div>
                    </div>
                    <div>
                      <div className="body-sm">Win Rate</div>
                      <div className="h4 text-[var(--accent-primary)]">85%</div>
                    </div>
                    <div>
                      <div className="body-sm">Max DD</div>
                      <div className="h4">-5.2%</div>
                    </div>
                    <div>
                      <div className="body-sm">Sharpe Ratio</div>
                      <div className="h4 text-[var(--accent-primary)]">2.8</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-full p-3">
                <Users size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg p-3">
                <div className="body-sm">Live Trading</div>
                <div className="h4 text-[var(--accent-primary)]">Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};