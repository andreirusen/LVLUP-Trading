import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { contactInfo } from '../mockData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I\'m interested in joining LVLUP University. Can you tell me more about your trading courses?');
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">Get In Touch</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Ready to start your trading journey? Contact us for more information about our courses, 
            community, and how we can help you achieve consistent trading success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="feature-card">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                  <Mail class="text-[var(--accent-primary)]" size={24} />
                </div>
                <div>
                  <h3 class="h4 mb-2">Email Us</h3>
                  <p class="body-md">Send us a detailed message</p>
                </div>
              </div>
              <a 
                href={`mailto:${contactInfo.email}`}
                class="text-[var(--accent-primary)] hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="feature-card">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                  <Phone class="text-[var(--accent-primary)]" size={24} />
                </div>
                <div>
                  <h3 class="h4 mb-2">Call Us</h3>
                  <p class="body-md">Speak directly with our team</p>
                </div>
              </div>
              <a 
                href={`tel:${contactInfo.phone}`}
                class="text-[var(--accent-primary)] hover:underline"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="feature-card">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                  <MessageCircle class="text-[var(--accent-primary)]" size={24} />
                </div>
                <div>
                  <h3 class="h4 mb-2">WhatsApp</h3>
                  <p class="body-md">Quick response via WhatsApp</p>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                class="btn-primary"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </button>
            </div>

            <div className="feature-card">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12 bg-[var(--accent-bg)] rounded-lg flex items-center justify-center">
                  <MapPin class="text-[var(--accent-primary)]" size={24} />
                </div>
                <div>
                  <h3 class="h4 mb-2">Location</h3>
                  <p class="body-md">Based in {contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="feature-card">
            <h3 className="h3 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block body-md mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block body-md mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block body-md mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell us about your trading experience and what you'd like to learn..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};