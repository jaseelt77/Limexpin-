'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';


export default function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-textBg text-brand-text border-t border-brand-textBg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-brand-textBg font-bold text-sm">.</span>
              </div>
              <span className="text-xl font-bold text-brand-accent">Limexpin</span>
            </div>
            <p className="text-brand-text/80 text-sm leading-relaxed">
              Building exceptional digital experiences with modern technology and creative design.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-brand-textBg hover:bg-brand-accent/20 transition-colors duration-200">
                <Linkedin size={18} className="text-brand-accent" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-brand-textBg hover:bg-brand-accent/20 transition-colors duration-200">
                <Twitter size={18} className="text-brand-accent" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-brand-textBg hover:bg-brand-accent/20 transition-colors duration-200">
                <Github size={18} className="text-brand-accent" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-accent">Product</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Features</a></li>
              <li><a href="/services" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Pricing</a></li>
              <li><a href="/services" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Security</a></li>
              <li><a href="/blog" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-accent">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">About</a></li>
              <li><a href="/blog" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Blog</a></li>
              <li><a href="/work" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Careers</a></li>
              <li><a href="/contact" className="text-brand-text/80 hover:text-brand-accent transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-brand-accent">Stay Updated</h3>
            <p className="text-brand-text/80 text-sm">Subscribe to get the latest updates and news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-brand-textBg/50 border border-brand-text/20 rounded-lg text-brand-text placeholder-brand-text/50 focus:outline-none focus:border-brand-accent transition-colors duration-200"
              />
              <button 
                onClick={handleSubscribe}
                className="px-3 py-2 bg-brand-accent text-brand-textBg rounded-lg hover:bg-brand-accent/90 transition-colors duration-200 font-medium text-sm"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-text/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-brand-text/60 text-sm">
            <p>&copy; {currentYear} App. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-brand-text/60 hover:text-brand-accent transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="text-brand-text/60 hover:text-brand-accent transition-colors duration-200">Terms of Service</a>
            <a href="/cookies" className="text-brand-text/60 hover:text-brand-accent transition-colors duration-200">Cookies</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-brand-accent/20 hover:bg-brand-accent/40 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-brand-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}