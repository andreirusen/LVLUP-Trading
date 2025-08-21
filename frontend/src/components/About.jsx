import React from 'react';
import { Target, Brain, Shield, Users, TrendingUp, BookOpen } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Money Concepts',
      description: 'Learn how institutional traders move the market and how to follow their footsteps for consistent profits.'
    },
    {
      icon: Brain,
      title: 'Trading Psychology',
      description: 'Master your emotions and develop the mindset needed to make rational trading decisions under pressure.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Protect your capital with proven risk management strategies that ensure long-term trading success.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a supportive community of traders where you can share experiences and learn from each other.'
    },
    {
      icon: TrendingUp,
      title: 'Live Trading Sessions',
      description: 'Watch real-time trading sessions and learn how to apply strategies in actual market conditions.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Education',
      description: 'Access structured courses covering everything from basics to advanced trading strategies and market analysis.'
    }
  ];

  const principles = [
    {
      title: 'Clarity',
      description: 'We believe in clear, straightforward education without unnecessary complexity.',
      color: 'text-blue-400'
    },
    {
      title: 'Patience',
      description: 'Success in trading requires patience - both in learning and in waiting for the right opportunities.',
      color: 'text-green-400'
    },
    {
      title: 'Consistency',
      description: 'Consistent application of proven strategies leads to sustainable long-term results.',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">About LVLUP University</h2>
          <p className="body-lg max-w-3xl mx-auto">
            LVLUP University is more than just a trading education platform—it's a community dedicated to 
            transforming lives through professional trading and financial education. We focus on building 
            not just better traders, but better decision-makers with discipline and clarity.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="feature-card mb-16">
          <div className="text-center">
            <h3 className="h2 mb-6 text-[var(--accent-primary)]">Our Mission</h3>
            <p className="body-lg mb-8 max-w-3xl mx-auto">
              To empower individuals with the knowledge, skills, and mindset needed to achieve consistent 
              success in trading while fostering a supportive community that grows together.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className={`h2 mb-3 ${principle.color}`}>{principle.title}</div>
                  <p className="body-md text-[var(--text-muted)]">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="h2 text-center mb-12">What We Offer</h3>
          <div className="card-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card hover-lift">
                <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-[var(--accent-primary)]" size={32} />
                </div>
                <h4 className="h3 mb-4">{feature.title}</h4>
                <p className="body-md text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="h2 mb-6">Our Approach to Trading Education</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] font-bold text-sm mt-1">
                  1
                </div>
                <div>
                  <h4 className="h4 mb-2">Foundation Building</h4>
                  <p className="body-md text-[var(--text-muted)]">
                    Start with solid fundamentals of market structure, price action, and basic concepts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] font-bold text-sm mt-1">
                  2
                </div>
                <div>
                  <h4 className="h4 mb-2">Strategy Development</h4>
                  <p className="body-md text-[var(--text-muted)]">
                    Learn proven strategies including Smart Money Concepts and institutional trading methods.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] font-bold text-sm mt-1">
                  3
                </div>
                <div>
                  <h4 className="h4 mb-2">Psychology & Mindset</h4>
                  <p className="body-md text-[var(--text-muted)]">
                    Develop emotional control and the mental discipline required for consistent success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] font-bold text-sm mt-1">
                  4
                </div>
                <div>
                  <h4 className="h4 mb-2">Practical Application</h4>
                  <p className="body-md text-[var(--text-muted)]">
                    Apply learned concepts in live market conditions with guidance and community support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-2xl p-8 border border-[var(--border-subtle)]">
              <div className="text-center mb-6">
                <h4 className="h3 mb-4">Student Success Metrics</h4>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="body-md">Course Completion Rate</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-[var(--border-primary)] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[var(--accent-primary)] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="h4 text-[var(--accent-primary)]">95%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="body-md">Student Satisfaction</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-[var(--border-primary)] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[var(--accent-primary)] rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="h4 text-[var(--accent-primary)]">4.9/5</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="body-md">Profitable Students</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-[var(--border-primary)] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[var(--accent-primary)] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="h4 text-[var(--accent-primary)]">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="feature-card text-center">
          <h3 className="h2 mb-8 text-[var(--accent-primary)]">Why Choose LVLUP University?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="h2 text-[var(--accent-primary)] mb-2">5+</div>
              <div className="body-md">Years of proven track record in trading and education</div>
            </div>
            <div>
              <div className="h2 text-[var(--accent-primary)] mb-2">500+</div>
              <div className="body-md">Successful students who've transformed their trading</div>
            </div>
            <div>
              <div className="h2 text-[var(--accent-primary)] mb-2">24/7</div>
              <div className="body-md">Community support and access to resources</div>
            </div>
            <div>
              <div className="h2 text-[var(--accent-primary)] mb-2">100%</div>
              <div className="body-md">Commitment to your success and growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};