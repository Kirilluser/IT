import { Search, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAddSkill: () => void;
}

export function Header({ darkMode, onToggleDarkMode, onOpenAddSkill }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ 
      backgroundColor: 'var(--theme-bg-card)', 
      borderColor: 'var(--theme-border)' 
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ 
              backgroundColor: 'var(--theme-accent)' 
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 7V17L10 12L17 17V7L10 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>LocalSkills</span>
          </div>

          {/* Search - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ 
                color: 'var(--theme-text-light)' 
              }} />
              <Input 
                placeholder="Search skills or people..."
                className="pl-10 rounded-full border"
                style={{
                  backgroundColor: 'var(--theme-bg)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text)'
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              variant="ghost"
              className="hidden sm:flex"
              style={{ color: 'var(--theme-text)' }}
            >
              Log In
            </Button>
            <Button 
              className="rounded-full"
              onClick={onOpenAddSkill}
              style={{ 
                backgroundColor: 'var(--theme-accent)',
                color: 'white'
              }}
            >
              <span className="hidden sm:inline">Offer a Skill</span>
              <span className="sm:hidden">+ Skill</span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ 
              color: 'var(--theme-text-light)' 
            }} />
            <Input 
              placeholder="Search skills..."
              className="pl-10 rounded-full border"
              style={{
                backgroundColor: 'var(--theme-bg)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
