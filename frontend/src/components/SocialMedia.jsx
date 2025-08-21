import React from 'react';
import { Youtube, Instagram, Music, MessageCircle, ExternalLink, Play } from 'lucide-react';
import { socialMediaLinks } from '../mockData';

export const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: socialMediaLinks.youtube,
      description: 'Trading tutorials, market analysis, and educational content',
      color: 'hover:text-red-500 hover:border-red-500',
      followers: '12.5K'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: socialMediaLinks.instagram,
      description: 'Daily trading insights, behind-the-scenes content',
      color: 'hover:text-pink-500 hover:border-pink-500',
      followers: '8.2K'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: socialMediaLinks.tiktok,
      description: 'Quick trading tips and market updates',
      color: 'hover:text-purple-500 hover:border-purple-500',
      followers: '15.7K'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: socialMediaLinks.discord,
      description: 'Join our trading community for real-time discussions',
      color: 'hover:text-blue-500 hover:border-blue-500',
      followers: '3.1K'
    }
  ];

  return (
    <section id="social" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">Follow Our Journey</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Stay connected with our community across all platforms. Get daily insights, 
            trading tips, and join thousands of traders on their journey to success.
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`feature-card group hover:scale-105 transition-all duration-300 ${platform.color}`}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-[var(--accent-bg)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-20 transition-all">
                  <platform.icon className="text-[var(--accent-primary)] group-hover:scale-110 transition-transform" size={40} />
                </div>
                
                <h3 className="h3 mb-3">{platform.name}</h3>
                <p className="body-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-[var(--accent-primary)]">
                  <span className="body-md font-medium">{platform.followers} followers</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Content Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* YouTube Featured Video */}
          <div className="feature-card">
            <div className="flex items-center space-x-3 mb-6">
              <Youtube className="text-red-500" size={24} />
              <h3 className="h3">Latest YouTube Video</h3>
            </div>
            
            <div className="relative bg-[var(--bg-tertiary)] rounded-lg overflow-hidden mb-4">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-red-500" size={24} />
                  </div>
                  <div className="h4 mb-2">Smart Money Concepts Explained</div>
                  <div className="body-sm text-[var(--text-muted)]">15 min • 2.1K views</div>
                </div>
              </div>
            </div>
            
            <p className="body-md mb-4">
              Learn the fundamentals of Smart Money Concepts and how institutions move the market.
            </p>
            
            <a
              href={socialMediaLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Youtube size={18} />
              Watch on YouTube
            </a>
          </div>

          {/* Community Highlights */}
          <div className="feature-card">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-blue-500" size={24} />
              <h3 className="h3">Community Highlights</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-[var(--bg-tertiary)] rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] text-sm font-bold">
                    A
                  </div>
                  <div>
                    <div className="body-md font-medium">Alex M.</div>
                    <div className="body-sm text-[var(--text-muted)]">Just hit my profit target! 🎯</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-[var(--bg-tertiary)] rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-[var(--bg-primary)] text-sm font-bold">
                    S
                  </div>
                  <div>
                    <div className="body-md font-medium">Sarah K.</div>
                    <div className="body-sm text-[var(--text-muted)]">Thanks for the risk management tips!</div>
                  </div>
                </div>
              </div>
            </div>
            
            <a
              href={socialMediaLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Join Discord Community
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="feature-card text-center mt-16">
          <h3 className="h2 mb-6">Stay Updated</h3>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly market insights, trading tips, 
            and exclusive content from our community.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          
          <p className="body-sm text-[var(--text-muted)] mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};