import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAddSkill: () => void;
  onScrollToSkills: () => void;
}

export function Hero({ onOpenAddSkill, onScrollToSkills }: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ 
              backgroundColor: 'var(--theme-secondary)',
              color: 'var(--theme-text)'
            }}>
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Community-Powered Learning</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ 
              color: 'var(--theme-text)',
              fontWeight: 700,
              lineHeight: 1.2
            }}>
              Learn. Share. Grow.
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ 
              color: 'var(--theme-text-light)',
              lineHeight: 1.6
            }}>
              Connect with local experts and exchange skills without money. 
              Teach what you know, learn what you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="rounded-full"
                onClick={onScrollToSkills}
                style={{ 
                  backgroundColor: 'var(--theme-accent)',
                  color: 'white',
                  paddingLeft: '2rem',
                  paddingRight: '2rem'
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Find a Partner
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full"
                onClick={onOpenAddSkill}
                style={{ 
                  borderColor: 'var(--theme-accent)',
                  color: 'var(--theme-accent)',
                  paddingLeft: '2rem',
                  paddingRight: '2rem'
                }}
              >
                Offer a Skill
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl mb-1" style={{ 
                  color: 'var(--theme-accent)',
                  fontWeight: 600
                }}>
                  2.5K+
                </div>
                <div className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
                  Members
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl mb-1" style={{ 
                  color: 'var(--theme-accent)',
                  fontWeight: 600
                }}>
                  800+
                </div>
                <div className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
                  Skills
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl mb-1" style={{ 
                  color: 'var(--theme-accent)',
                  fontWeight: 600
                }}>
                  150+
                </div>
                <div className="text-sm" style={{ color: 'var(--theme-text-light)' }}>
                  Cities
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1512440731514-4de6f97c2d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsZWFybmluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2Mjk1NzAzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="People learning together"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 p-4 rounded-2xl shadow-lg max-w-[200px]" style={{ 
              backgroundColor: 'var(--theme-bg-card)'
            }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'var(--theme-accent)' }} />
                <div>
                  <div className="text-sm mb-1" style={{ color: 'var(--theme-text)' }}>Sarah M.</div>
                  <div className="text-xs" style={{ color: 'var(--theme-text-light)' }}>Teaches: Guitar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
