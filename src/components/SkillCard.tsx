import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export interface SkillData {
  id: string;
  name: string;
  city: string;
  avatar: string;
  canTeach: string[];
  wantsToLearn: string[];
  tags: string[];
  level: string;
  mode: 'Online' | 'Offline' | 'Both';
}

interface SkillCardProps {
  skill: SkillData;
  onViewProfile: (skill: SkillData) => void;
  onMessage: (skill: SkillData) => void;
}

export function SkillCard({ skill, onViewProfile, onMessage }: SkillCardProps) {
  return (
    <div 
      className="rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 group"
      style={{ 
        backgroundColor: 'var(--theme-bg-card)',
        borderColor: 'var(--theme-border)'
      }}
    >
      {/* Header with avatar and info */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-14 h-14 border-2" style={{ borderColor: 'var(--theme-accent)' }}>
          <AvatarImage src={skill.avatar} alt={skill.name} />
          <AvatarFallback style={{ 
            backgroundColor: 'var(--theme-accent)',
            color: 'white'
          }}>
            {skill.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 truncate" style={{ color: 'var(--theme-text)' }}>
            {skill.name}
          </h3>
          <div className="flex items-center gap-1 text-sm" style={{ color: 'var(--theme-text-light)' }}>
            <MapPin className="w-3 h-3" />
            <span className="truncate">{skill.city}</span>
          </div>
        </div>

        <Badge 
          variant="secondary" 
          className="shrink-0"
          style={{
            backgroundColor: 'var(--theme-secondary)',
            color: 'var(--theme-text)',
            border: 'none'
          }}
        >
          {skill.level}
        </Badge>
      </div>

      {/* Skills */}
      <div className="space-y-3 mb-4">
        <div>
          <div className="text-xs mb-2" style={{ 
            color: 'var(--theme-text-light)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Can teach
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skill.canTeach.map((s, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-full text-sm"
                style={{
                  backgroundColor: 'var(--theme-accent)',
                  color: 'white'
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs mb-2" style={{ 
            color: 'var(--theme-text-light)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Wants to learn
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skill.wantsToLearn.map((s, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-full text-sm border"
                style={{
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-text-light)',
                  backgroundColor: 'var(--theme-bg)'
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {skill.tags.map((tag, i) => (
          <Badge 
            key={i} 
            variant="outline" 
            className="text-xs"
            style={{
              borderColor: 'var(--theme-border)',
              color: 'var(--theme-text-light)',
              backgroundColor: 'transparent'
            }}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 rounded-full group-hover:border-current transition-colors"
          onClick={() => onViewProfile(skill)}
          style={{
            borderColor: 'var(--theme-border)',
            color: 'var(--theme-text)'
          }}
        >
          View Profile
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="icon"
          className="rounded-full shrink-0"
          onClick={() => onMessage(skill)}
          style={{ 
            backgroundColor: 'var(--theme-accent)',
            color: 'white'
          }}
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
