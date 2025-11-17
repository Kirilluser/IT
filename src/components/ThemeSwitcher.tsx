import { Button } from './ui/button';
import { Palette } from 'lucide-react';

interface ThemeSwitcherProps {
  currentTheme: 'minimal' | 'vibrant' | 'professional';
  onThemeChange: (theme: 'minimal' | 'vibrant' | 'professional') => void;
}

const themes = [
  { 
    id: 'minimal' as const, 
    name: 'Soft Minimal', 
    color: '#1ABC9C',
    description: 'Clean & warm'
  },
  { 
    id: 'vibrant' as const, 
    name: 'Vibrant Friendly', 
    color: '#FF6B6B',
    description: 'Energetic & fun'
  },
  { 
    id: 'professional' as const, 
    name: 'Calm Professional', 
    color: '#3B82F6',
    description: 'Focused & trustworthy'
  }
];

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div 
        className="rounded-2xl p-4 shadow-2xl border"
        style={{ 
          backgroundColor: 'var(--theme-bg-card)',
          borderColor: 'var(--theme-border)'
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
          <span className="text-sm" style={{ color: 'var(--theme-text)' }}>
            Theme Variants
          </span>
        </div>
        
        <div className="flex flex-col gap-2">
          {themes.map((theme) => (
            <Button
              key={theme.id}
              variant={currentTheme === theme.id ? 'default' : 'outline'}
              className="justify-start gap-3 h-auto py-2.5 px-3"
              onClick={() => onThemeChange(theme.id)}
              style={currentTheme === theme.id ? {
                backgroundColor: theme.color,
                color: 'white',
                borderColor: theme.color
              } : {
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}
            >
              <div 
                className="w-4 h-4 rounded-full shrink-0"
                style={{ backgroundColor: theme.color }}
              />
              <div className="text-left">
                <div className="text-sm leading-none mb-1">{theme.name}</div>
                <div className="text-xs opacity-70">{theme.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
