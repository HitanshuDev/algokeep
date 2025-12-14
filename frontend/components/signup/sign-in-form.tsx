import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { Mail, Lock, Github } from 'lucide-react';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Sign in with:', { email, password, rememberMe });
      // Handle sign in logic here
    }
  };

  const handleGithubSignIn = () => {
    console.log('Sign in with GitHub');
    // Handle GitHub OAuth here
  };

  return (
    <div className="w-full max-w-md animate-fade-in">
      {/* Logo and Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-[#229799] to-[#34d2e0] shadow-[0_0_30px_rgba(34,151,153,0.4)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
            <path d="M8 15h6" />
          </svg>
        </div>
        <h1 className="mb-2">AlgoKeep</h1>
        <p className="text-[#a8a8a8]">Sign in to continue</p>
      </div>

      {/* Glassmorphic Card */}
      <div className="bg-[#211f1e]/80 backdrop-blur-xl border border-[#333333]/50 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <Input
            type="email"
            label="Email address"
            placeholder="developer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            icon={<Mail size={18} />}
          />

          {/* Password Input */}
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            icon={<Lock size={18} />}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#333333] bg-[#0a0a0a] text-[#229799] focus:ring-2 focus:ring-[#34d2e0]/20 focus:ring-offset-0 transition-all cursor-pointer"
              />
              <span className="text-sm text-[#a8a8a8] group-hover:text-[#f5f5f5] transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="#forgot-password"
              className="text-sm text-[#34d2e0] hover:text-[#229799] transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <Button type="submit" variant="primary" fullWidth>
            Sign In
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#333333]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#211f1e] text-[#666666]">or continue with</span>
            </div>
          </div>

          {/* GitHub Sign In */}
          <Button
            type="button"
            variant="outline"
            fullWidth
            icon={<Github size={20} />}
            onClick={handleGithubSignIn}
          >
            Sign in with GitHub
          </Button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[#a8a8a8]">
          Don't have an account?{' '}
          <a href="#signup" className="text-[#34d2e0] hover:text-[#229799] transition-colors">
            Sign up
          </a>
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#666666]">
          <a href="#privacy" className="hover:text-[#a8a8a8] transition-colors">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#terms" className="hover:text-[#a8a8a8] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};