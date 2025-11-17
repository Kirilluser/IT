import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { MapPin, Filter } from 'lucide-react';
import { Button } from './ui/button';

interface SearchFiltersProps {
  selectedCategory: string;
  selectedLevel: string;
  selectedMode: string;
  onCategoryChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onModeChange: (value: string) => void;
}

const categories = [
  'All Categories',
  'Music',
  'Languages',
  'Programming',
  'Cooking',
  'Art & Design',
  'Fitness',
  'Crafts',
  'Photography',
  'Writing'
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const modes = ['All Modes', 'Online', 'Offline', 'Both'];

export function SearchFilters({
  selectedCategory,
  selectedLevel,
  selectedMode,
  onCategoryChange,
  onLevelChange,
  onModeChange
}: SearchFiltersProps) {
  return (
    <section className="sticky top-16 z-40 border-b" style={{ 
      backgroundColor: 'var(--theme-bg)', 
      borderColor: 'var(--theme-border)' 
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Mobile filter button */}
        <div className="md:hidden mb-3">
          <Button variant="outline" className="w-full justify-center gap-2" style={{
            borderColor: 'var(--theme-border)',
            color: 'var(--theme-text)'
          }}>
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Desktop filters */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm mb-2 block" style={{ color: 'var(--theme-text-light)' }}>
              Category
            </label>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger style={{
                backgroundColor: 'var(--theme-bg-card)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm mb-2 block" style={{ color: 'var(--theme-text-light)' }}>
              Level
            </label>
            <Select value={selectedLevel} onValueChange={onLevelChange}>
              <SelectTrigger style={{
                backgroundColor: 'var(--theme-bg-card)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm mb-2 block" style={{ color: 'var(--theme-text-light)' }}>
              Mode
            </label>
            <Select value={selectedMode} onValueChange={onModeChange}>
              <SelectTrigger style={{
                backgroundColor: 'var(--theme-bg-card)',
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-text)'
              }}>
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                {modes.map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm mb-2 block" style={{ color: 'var(--theme-text-light)' }}>
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ 
                color: 'var(--theme-text-light)' 
              }} />
              <input
                type="text"
                placeholder="City or radius"
                className="w-full h-10 pl-10 pr-3 rounded-md border"
                style={{
                  backgroundColor: 'var(--theme-bg-card)',
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedCategory !== 'All Categories' && (
            <Badge variant="secondary" className="rounded-full" style={{
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}>
              {selectedCategory}
            </Badge>
          )}
          {selectedLevel !== 'All Levels' && (
            <Badge variant="secondary" className="rounded-full" style={{
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}>
              {selectedLevel}
            </Badge>
          )}
          {selectedMode !== 'All Modes' && (
            <Badge variant="secondary" className="rounded-full" style={{
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}>
              {selectedMode}
            </Badge>
          )}
        </div>
      </div>
    </section>
  );
}
