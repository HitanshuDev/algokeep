import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#211f1e] border-t border-[#34d2e0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyan-teal flex items-center justify-center">
                <Code2 className="w-6 h-6 text-[#000000]" />
              </div>
              <span className="text-[#f5f5f5]">AlgoKeep</span>
            </div>
            <p className="text-[#f5f5f5]/60">Your central hub for DSA problem solutions.</p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-[#f5f5f5] mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Features</a></li>
              <li><a href="#preview" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Preview</a></li>
              <li><a href="#pricing" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Pricing</a></li>
              <li><a href="#roadmap" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-[#f5f5f5] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">About</a></li>
              <li><a href="#blog" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-[#f5f5f5] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#34d2e0]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f5f5]/60">© 2025 AlgoKeep. All rights reserved.</p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#github" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#twitter" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#email" className="text-[#f5f5f5]/60 hover:text-[#34d2e0] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
