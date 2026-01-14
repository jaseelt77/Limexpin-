"use client";

import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative bg-brand-textBg rounded-3xl overflow-hidden shadow-lg">
      {/* Newsletter Banner - Full Width */}
      <div className="relative w-full">
        <div className="relative py-12 md:py-24 overflow-hidden">
          {/* Background Image - Full Width */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1600&h=600&fit=crop"
              alt="Newsletter Background"
              className="w-full h-full object-cover"
              width={600} height={400}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Stay Updated with Latest News
                </h2>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get exclusive insights, tips, and updates delivered straight to your inbox every week.
                </p>
              </div>

              {/* Newsletter Form */}
              {!subscribed ? (
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
                    />
                    <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                  
                  <Button
                                             variant="primary"
                                              onClick={handleSubscribe}
                                              className="px-8 py-3.5  text-white font-regular rounded-full text-white hover:bg-brand-accent transition-colors duration-300 transform hover:scale-105"
                                              >
                                              Subscribe
                                          </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl mx-auto">
                  <CheckCircle size={48} className="text-green-400" />
                  <p className="text-xl font-semibold text-white">
                    Thank you for subscribing!
                  </p>
                  <p className="text-gray-100">
                    Check your email for confirmation and exclusive welcome offer.
                  </p>
                </div>
              )}

              {/* Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <div className="text-center">
                  <p className="text-gray-200 text-sm">✓ No spam, just great content</p>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-400/30" />
                <div className="text-center">
                  <p className="text-gray-200 text-sm">✓ Unsubscribe anytime</p>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-400/30" />
                <div className="text-center">
                  <p className="text-gray-200 text-sm">✓ 50,000+ subscribers</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-brand-accent/20 rounded-full blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl z-0 pointer-events-none" />
          </div>
        </div>
      </div>

     
    </div>
  );
}