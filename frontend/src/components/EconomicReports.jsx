import React, { useState, useEffect } from 'react';
import { Calendar, Clock, TrendingUp, AlertCircle, ExternalLink } from 'lucide-react';
import { economicEvents } from '../mockData';

export const EconomicReports = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'low':
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getImpactLabel = (impact) => {
    switch (impact) {
      case 'high':
        return 'High Impact';
      case 'medium':
        return 'Medium Impact';
      case 'low':
        return 'Low Impact';
      default:
        return 'Unknown';
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="reports" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">Today's Economic Reports</h2>
          <p className="body-lg max-w-2xl mx-auto">
            Stay updated with today's key economic events that can impact the markets. 
            We monitor high and medium impact news that affect USD, EUR, and GBP pairs.
          </p>
        </div>

        {/* Current Time & Date */}
        <div className="feature-card text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Calendar className="text-[var(--accent-primary)]" size={24} />
            <div>
              <div className="h3">{formatDate(currentTime)}</div>
              <div className="body-md text-[var(--text-muted)]">
                Current Time: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* Economic Events */}
        <div className="grid gap-4 mb-8">
          {economicEvents.map((event) => (
            <div key={event.id} className="feature-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-[var(--text-muted)]" size={16} />
                    <span className="h4">{event.time}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-sm font-medium">
                    {event.currency}
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getImpactColor(event.impact)}`}>
                    {getImpactLabel(event.impact)}
                  </div>
                </div>
                <TrendingUp className="text-[var(--accent-primary)]" size={20} />
              </div>

              <h3 className="h3 mb-4">{event.event}</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[var(--bg-tertiary)] rounded-lg">
                  <div className="body-sm text-[var(--text-muted)] mb-1">Actual</div>
                  <div className="h4 text-[var(--accent-primary)]">{event.actual}</div>
                </div>
                <div className="text-center p-4 bg-[var(--bg-tertiary)] rounded-lg">
                  <div className="body-sm text-[var(--text-muted)] mb-1">Forecast</div>
                  <div className="h4">{event.forecast}</div>
                </div>
                <div className="text-center p-4 bg-[var(--bg-tertiary)] rounded-lg">
                  <div className="body-sm text-[var(--text-muted)] mb-1">Previous</div>
                  <div className="h4">{event.previous}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Forex Factory Integration */}
        <div className="feature-card text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertCircle className="text-[var(--accent-primary)]" size={24} />
            <h3 className="h3">Live Economic Calendar</h3>
          </div>
          
          <p className="body-md mb-6 max-w-2xl mx-auto">
            For the most up-to-date economic events and real-time updates, visit the official 
            Forex Factory calendar with our recommended filters.
          </p>

          <div className="space-y-4 mb-8">
            <p className="body-sm text-[var(--text-muted)]">
              <strong>Our Filters:</strong> High & Medium Impact Events | USD, EUR, GBP Currencies | All Event Types
            </p>
          </div>

          <a
            href="https://www.forexfactory.com/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <ExternalLink size={18} />
            View Full Economic Calendar
          </a>
        </div>

        {/* Trading Tips */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="feature-card">
            <h4 className="h4 mb-4 text-[var(--accent-primary)]">High Impact Events</h4>
            <ul className="space-y-2 body-md">
              <li>• Non-Farm Payrolls (NFP)</li>
              <li>• Interest Rate Decisions</li>
              <li>• GDP Releases</li>
              <li>• Inflation Data (CPI/PPI)</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h4 className="h4 mb-4 text-[var(--accent-primary)]">Trading Strategy</h4>
            <ul className="space-y-2 body-md">
              <li>• Avoid trading 30min before major news</li>
              <li>• Wait for initial volatility to settle</li>
              <li>• Focus on trend continuation setups</li>
              <li>• Use proper risk management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};