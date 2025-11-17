import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilters } from './components/SearchFilters';
import { SkillCard, SkillData } from './components/SkillCard';
import { ProfileModal } from './components/ProfileModal';
import { AddSkillForm } from './components/AddSkillForm';
import { Footer } from './components/Footer';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { mockSkills } from './components/mockData';

type Theme = 'minimal' | 'vibrant' | 'professional';

export default function App() {
  const [theme, setTheme] = useState<Theme>('minimal');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedMode, setSelectedMode] = useState('All Modes');
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAddSkillForm, setShowAddSkillForm] = useState(false);
  
  const skillsRef = useRef<HTMLDivElement>(null);

  // Apply theme classes
  useEffect(() => {
    const themeClass = `theme-${theme}`;
    document.documentElement.classList.remove('theme-minimal', 'theme-vibrant', 'theme-professional');
    document.documentElement.classList.add(themeClass);

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, darkMode]);

  const handleViewProfile = (skill: SkillData) => {
    setSelectedSkill(skill);
    setShowProfileModal(true);
  };

  const handleMessage = (skill: SkillData) => {
    console.log('Message:', skill.name);
    // In a real app, this would open a messaging interface
  };

  const handleScrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter skills
  const filteredSkills = mockSkills.filter(skill => {
    const categoryMatch = selectedCategory === 'All Categories' || 
      skill.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    const levelMatch = selectedLevel === 'All Levels' || skill.level === selectedLevel;
    const modeMatch = selectedMode === 'All Modes' || skill.mode === selectedMode || skill.mode === 'Both';
    
    return categoryMatch && levelMatch && modeMatch;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-bg)' }}>
      {/* Theme Switcher */}
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />

      {/* Header */}
      <Header 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenAddSkill={() => setShowAddSkillForm(true)}
      />

      {/* Hero */}
      <Hero 
        onOpenAddSkill={() => setShowAddSkillForm(true)}
        onScrollToSkills={handleScrollToSkills}
      />

      {/* Search & Filters */}
      <SearchFilters
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        selectedMode={selectedMode}
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
        onModeChange={setSelectedMode}
      />

      {/* Skills Grid */}
      <section 
        ref={skillsRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="mb-2" style={{ color: 'var(--theme-text)' }}>
              Available Skills
            </h2>
            <p className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
              {filteredSkills.length} {filteredSkills.length === 1 ? 'person' : 'people'} found
            </p>
          </div>
        </div>

        {/* Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onViewProfile={handleViewProfile}
                onMessage={handleMessage}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div 
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--theme-secondary)' }}
            >
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ color: 'var(--theme-text-light)' }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ color: 'var(--theme-text)' }}>
              No skills found
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--theme-text-light)' }}>
              Try adjusting your filters or search criteria
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div 
          className="mt-16 rounded-3xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: 'var(--theme-secondary)' }}
        >
          <h2 className="mb-4" style={{ color: 'var(--theme-text)' }}>
            Ready to Share Your Skills?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'var(--theme-text-light)' }}>
            Join our community and start exchanging knowledge today. It's free and easy to get started!
          </p>
          <button
            className="px-8 py-3 rounded-full transition-transform hover:scale-105"
            onClick={() => setShowAddSkillForm(true)}
            style={{ 
              backgroundColor: 'var(--theme-accent)',
              color: 'white'
            }}
          >
            Offer Your Skill
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProfileModal
        skill={selectedSkill}
        open={showProfileModal}
        onOpenChange={setShowProfileModal}
      />

      <AddSkillForm
        open={showAddSkillForm}
        onOpenChange={setShowAddSkillForm}
      />
    </div>
  );
}
