import React from 'react';
import { Award, TrendingUp, Users, BookOpen } from 'lucide-react';
import { teamMembers } from '../mockData';

export const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">Meet Our Team</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Led by experienced professionals dedicated to your trading success. 
            Our team combines years of market experience with a passion for education.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="feature-card">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Profile Image */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-2xl object-cover mx-auto border-4 border-[var(--accent-primary)]"
                    />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--accent-primary)] rounded-full flex items-center justify-center">
                      <Award className="text-[var(--bg-primary)]" size={24} />
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h3 className="h2 mb-2">{member.name}</h3>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--accent-bg)] text-[var(--accent-primary)] body-md font-medium">
                      {member.role}
                    </div>
                  </div>

                  <p className="body-md mb-8 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Areas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-[var(--accent-primary)]" size={20} />
                      </div>
                      <div>
                        <div className="body-md font-medium">Smart Money Concepts</div>
                        <div className="body-sm text-[var(--text-muted)]">Expert Level</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                        <BookOpen className="text-[var(--accent-primary)]" size={20} />
                      </div>
                      <div>
                        <div className="body-md font-medium">Risk Management</div>
                        <div className="body-sm text-[var(--text-muted)]">Advanced</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                        <Users className="text-[var(--accent-primary)]" size={20} />
                      </div>
                      <div>
                        <div className="body-md font-medium">Trading Psychology</div>
                        <div className="body-sm text-[var(--text-muted)]">Specialist</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                        <Award className="text-[var(--accent-primary)]" size={20} />
                      </div>
                      <div>
                        <div className="body-md font-medium">Forex & Indices</div>
                        <div className="body-sm text-[var(--text-muted)]">5+ Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="feature-card mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="h2 mb-6 text-[var(--accent-primary)]">Our Mission</h3>
            <p className="body-lg mb-8">
              At LVLUP University, we believe that successful trading is not just about making profits—it's about 
              building discipline, understanding market psychology, and developing strategies that stand the test of time.
            </p>
            <p className="body-md text-[var(--text-muted)]">
              We're committed to providing world-class education, ongoing support, and a community where traders 
              can grow together. Our approach focuses on clarity, patience, and consistency—the three pillars 
              of sustainable trading success.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">5+</div>
            <div className="body-md">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">500+</div>
            <div className="body-md">Students Trained</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">95%</div>
            <div className="body-md">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">24/7</div>
            <div className="body-md">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};