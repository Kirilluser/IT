import { Heart, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ 
      backgroundColor: 'var(--theme-bg-card)', 
      borderColor: 'var(--theme-border)' 
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ 
                backgroundColor: 'var(--theme-accent)' 
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7V17L10 12L17 17V7L10 2Z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>LocalSkills</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--theme-text-light)' }}>
              Learn by teaching others. Building stronger communities through skill exchange.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--theme-bg)' }}
              >
                <Twitter className="w-4 h-4" style={{ color: 'var(--theme-text-light)' }} />
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--theme-bg)' }}
              >
                <Facebook className="w-4 h-4" style={{ color: 'var(--theme-text-light)' }} />
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--theme-bg)' }}
              >
                <Instagram className="w-4 h-4" style={{ color: 'var(--theme-text-light)' }} />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--theme-bg)' }}
              >
                <Linkedin className="w-4 h-4" style={{ color: 'var(--theme-text-light)' }} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--theme-text)' }}>Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Find Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Offer a Skill
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--theme-text)' }}>Community</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Forums
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--theme-text)' }}>Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" style={{ color: 'var(--theme-text-light)' }}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{
          borderColor: 'var(--theme-border)'
        }}>
          <p className="text-sm text-center sm:text-left" style={{ color: 'var(--theme-text-light)' }}>
            © 2025 LocalSkills. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1" style={{ color: 'var(--theme-text-light)' }}>
            Made with <Heart className="w-4 h-4 fill-current" style={{ color: 'var(--theme-accent)' }} /> for communities
          </p>
        </div>
      </div>
    </footer>
  );
}
