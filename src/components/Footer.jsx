import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-amber-400 mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-medium">Faisal Tower, Faisal Town</p>
                  <p>Main Fateh Jang Road N-80</p>
                  <p>Near Tarnol Interchange Motorway</p>
                  <p>M-1, Rawalpindi Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* Office Numbers */}
            <div className="space-y-3 pt-4 border-t border-slate-700">
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">Head Office:</span> UAN No: 051-111-324-725
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">Faisal Town:</span> 051-2720504-5
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">Faisal Hills:</span> 051-4500000-2
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">Faisal Margalla City:</span> 051-5443746-7
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-amber-400 mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold">Give us a call</span>
                </div>
                <a href="tel:051-111-324-725" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
                  051-111-324-725
                </a>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold">Have a project in mind?</span>
                </div>
                <a href="mailto:info@faisaltown.com.pk" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                  info@faisaltown.com.pk
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-amber-400 mb-6 relative">
              Useful Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            
            <div className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'About Us', href: '/about' },
                { name: 'Downloads', href: '/downloads' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Our Company Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-amber-400 mb-6 relative">
              Our Company
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            
            <div className="space-y-3">
              {[
                { name: 'News and Events', href: '/news' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Our Projects', href: '/our-projects' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-2 py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="pt-6 border-t border-slate-700">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Youtube, href: '#', label: 'YouTube' },
                  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-400 hover:scale-110 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-slate-900" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © Copyright 2025 Faisal Town. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-amber-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;