import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Palette, Check } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие по клику вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Получаем текущую тему для отображения в кружочке
  const currentThemeData = themes.find(theme => theme.id === currentTheme);

  return (
    <div ref={dropdownRef} className="fixed bottom-6 left-6 z-50">
      {/* Кружок-триггер */}
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          backgroundColor: 'var(--theme-bg-card)',
          borderColor: 'var(--theme-border)'
        }}
        title="Change theme"
      >
        <div className="flex flex-col items-center gap-0.5">
          <Palette className="w-4 h-4" style={{ color: 'var(--theme-text)' }} />
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: currentThemeData?.color }}
          />
        </div>
      </Button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div 
          className="absolute bottom-14 left-0 rounded-xl shadow-2xl border p-3 min-w-[200px] backdrop-blur-sm animate-in fade-in-0 zoom-in-95"
          style={{ 
            backgroundColor: 'var(--theme-bg-card)',
            borderColor: 'var(--theme-border)'
          }}
        >
          <div className="flex items-center gap-2 mb-3 px-1">
            <Palette className="w-4 h-4" style={{ color: 'var(--theme-accent)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--theme-text)' }}>
              Theme Variants
            </span>
          </div>
          
          <div className="space-y-2">
            {themes.map((theme) => (
              <Button
                key={theme.id}
                variant="outline"
                className="justify-start gap-3 h-auto py-2.5 px-3 w-full transition-all duration-200 hover:scale-[1.02]"
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                style={{ 
                  borderColor: currentTheme === theme.id ? theme.color : 'var(--theme-border)',
                  backgroundColor: currentTheme === theme.id ? `${theme.color}15` : 'transparent',
                  color: 'var(--theme-text)'
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: theme.color }}
                />
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium leading-none mb-1">{theme.name}</div>
                  <div className="text-xs opacity-70">{theme.description}</div>
                </div>
                {currentTheme === theme.id && (
                  <Check className="w-4 h-4 shrink-0" style={{ color: theme.color }} />
                )}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}